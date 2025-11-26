# How to Add Screenshots

## Required Screenshots

Place your screenshot images in the `public/screenshots/` folder with these exact names:

1. **ai-chat.png** - Dr. HausPet AI chat interface
2. **dashboard.png** - Pet Owner Dashboard
3. **reports.png** - Medical Report Generation
4. **vet-dashboard.png** - Veterinary Patient Management System

## Steps to Add Screenshots

### Option 1: Using the Terminal
```bash
# Create the screenshots folder
mkdir -p public/screenshots

# Copy your images to the folder (replace with your actual file paths)
cp /path/to/your/ai-chat-screenshot.png public/screenshots/ai-chat.png
cp /path/to/your/dashboard-screenshot.png public/screenshots/dashboard.png
cp /path/to/your/reports-screenshot.png public/screenshots/reports.png
cp /path/to/your/vet-dashboard-screenshot.png public/screenshots/vet-dashboard.png
```

### Option 2: Manual Copy
1. Create a folder: `public/screenshots/`
2. Copy your 4 screenshot images into this folder
3. Rename them to match the names above

## Image Specifications

- **Format**: PNG or JPG
- **Aspect Ratio**: 9:16 (mobile/portrait) works best
- **Resolution**: At least 1080x1920px for crisp display
- **File Size**: Keep under 500KB each for fast loading

## Current Screenshot Mappings

The app expects these screenshots for each tab:

| Tab | File Name | Description |
|-----|-----------|-------------|
| Dr. HausPet AI | `ai-chat.png` | AI chat interface with health vitals |
| Pet Owner Dashboard | `dashboard.png` | Dashboard showing multiple pets |
| Automated Reports | `reports.png` | Medical report generation interface |
| Vet Management | `vet-dashboard.png` | Veterinary patient list |

## Fallback Behavior

If a screenshot image is not found, the app will display:
- An icon representing the feature
- The title and subtitle
- A "Screenshot preview" placeholder

This ensures the page still looks good even without images.

## Testing

After adding your screenshots:
1. Refresh the browser at http://localhost:5173/
2. Scroll to "See HausPet in Action" section
3. Click through each tab to verify images load correctly
4. Check browser console for any image loading errors
