
# Navigate to the frontend directory
cd frontend

# Set CI environment variable to false to prevent treating warnings as errors
export CI=false

# Install dependencies
npm install

# Build the frontend
npm run build

cd ..

pip install -r requirements.txt 
python3.9 manage.py collectstatic