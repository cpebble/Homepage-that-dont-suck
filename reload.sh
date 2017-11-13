#!/bin/bash
inotifywait -e close_write,moved_to,create -m ./* |
while read -r directory events filename; do
        WID=`xdotool search "Mozilla Firefox" | head -1`
        cwid=$(xdotool getwindowfocus) # Save the current window
        xdotool windowactivate --sync "$WID"
        sleep 0.1 # The key event might be sent before the window has been fully activated
        xdotool key --window "$WID" F5
        xdotool windowactivate $cwid # Done, now go back to where we were
done
