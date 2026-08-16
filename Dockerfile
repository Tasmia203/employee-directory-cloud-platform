# Use the official Node.js image
FROM node:22

# Set the working directory
WORKDIR /app

# Copy backend package files
COPY Backend/package*.json ./Backend/

# Install backend dependencies
RUN cd Backend && npm install

# Copy the rest of the project
COPY . .

# Expose the Express server port
EXPOSE 3000

# Start the backend server
CMD ["npm", "start", "--prefix", "Backend"]