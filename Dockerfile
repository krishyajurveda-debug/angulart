# Use a lightweight Nginx image
FROM nginx:alpine

# Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy your built files from the repository to the Nginx html directory
# We copy them into a subfolder named 'app'
COPY skillforge /usr/share/nginx/html/app

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Ensure Nginx has permissions to read the files
RUN chmod -R 755 /usr/share/nginx/html/app

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
