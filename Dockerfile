# Use a lightweight Nginx image
FROM nginx:alpine

# Remove the default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy your built files from the repository to the Nginx html directory
# We are copying the contents of the 'dist/skillforge' folder
COPY skillforge /usr/share/nginx/html/app

# Copy a custom Nginx configuration to handle Angular routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (Render will map this automatically)
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
