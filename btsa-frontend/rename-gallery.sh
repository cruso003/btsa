#!/bin/bash

# Script to rename WhatsApp gallery images to clean, numbered filenames
# This renames all WhatsApp images to member-work-01.jpeg, member-work-02.jpeg, etc.

cd "$(dirname "$0")/public/gallery" || exit 1

echo "Starting gallery image renaming..."
echo "Total images to rename: $(ls -1 "WhatsApp Image"* 2>/dev/null | wc -l)"

# Counter for numbering
counter=1

# Sort files by timestamp to maintain chronological order
for file in $(ls -1 "WhatsApp Image"* 2>/dev/null | sort); do
    # Get file extension
    extension="${file##*.}"
    
    # Create new filename with zero-padded number (e.g., member-work-01.jpeg)
    new_name=$(printf "member-work-%02d.%s" "$counter" "$extension")
    
    # Rename the file
    if [ -f "$file" ]; then
        mv "$file" "$new_name"
        echo "Renamed: $file -> $new_name"
        ((counter++))
    fi
done

echo ""
echo "Renaming complete! Renamed $((counter-1)) images."
echo "New naming format: member-work-01.jpeg through member-work-$(printf "%02d" $((counter-1))).jpeg"
