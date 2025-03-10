# Peace of Mind House Sitting

## Overview
A professional website for a house sitting service in Durbanville and surrounding areas. The site allows potential clients to select dates they need service and reach out via WhatsApp with their inquiry already formatted.

## Features
- **Professional Presentation**: Clean, responsive design that clearly communicates the house sitting services offered
- **Date Range Selection**: Interactive calendar for selecting service dates using Flatpickr
- **Automated WhatsApp Contact**: Direct contact via WhatsApp with pre-populated message including selected dates and comments
- **Mobile-Friendly Layout**: Fully responsive design works on desktops, tablets, and mobile phones

## GitHub Actions Deployment

This project uses GitHub Actions to securely inject environment secrets during deployment to GitHub Pages:

1. **Set up the Repository Secret**:
   - Go to your GitHub repository
   - Navigate to Settings > Secrets and variables > Actions
   - Click "New repository secret"
   - Create a secret named `WHATSAPP_NUMBER` with your WhatsApp number as the value (e.g., "1234567890")

2. **Deployment Process**:
   - The GitHub Action will automatically replace `WHATSAPP_NUMBER_PLACEHOLDER` in scripts.js with your actual WhatsApp number
   - This ensures your phone number isn't exposed in the source code repository
   - The site will be deployed to the gh-pages branch

3. **Manual Deployment**:
   - You can manually trigger a deployment by going to the Actions tab and running the workflow

## Local Development

For local development, replace `WHATSAPP_NUMBER_PLACEHOLDER` in scripts.js with your actual WhatsApp number. Just remember not to commit this change to the repository.
