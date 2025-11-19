#!/bin/bash
# Push to both repositories
echo "Pushing to Callcheck..."
git push origin main
echo "Pushing to callcheck1..."
git push callcheck1 main
echo "Done!"

