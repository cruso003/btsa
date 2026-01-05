#!/usr/bin/env python3
"""
Script to rename WhatsApp gallery images to clean, numbered filenames.
Renames all WhatsApp images to member-work-01.jpeg, member-work-02.jpeg, etc.
"""

import os
import re
from pathlib import Path

# Change to gallery directory
gallery_dir = Path(__file__).parent / "public" / "gallery"
os.chdir(gallery_dir)

print("Starting gallery image renaming...")

# Get all WhatsApp images and sort them
whatsapp_images = sorted([f for f in os.listdir('.') if f.startswith('WhatsApp Image')])

print(f"Total images to rename: {len(whatsapp_images)}")
print()

# Rename each file
for counter, filename in enumerate(whatsapp_images, start=1):
    # Get file extension
    extension = filename.split('.')[-1]
    
    # Create new filename with zero-padded number
    new_name = f"member-work-{counter:02d}.{extension}"
    
    # Rename the file
    try:
        os.rename(filename, new_name)
        print(f"Renamed: {filename} -> {new_name}")
    except Exception as e:
        print(f"Error renaming {filename}: {e}")

print()
print(f"Renaming complete! Renamed {len(whatsapp_images)} images.")
print(f"New naming format: member-work-01.jpeg through member-work-{len(whatsapp_images):02d}.jpeg")
