# 1. Use a lightweight Nginx image
FROM nginx:alpine

# 2. Remove default Nginx site files
RUN rm -rf /usr/share/nginx/html/*

# 3. Copy your specific folder contents to the Nginx root
# Replace 'dist/skillforge/browse/' with the exact path you found in step 1
COPY dist/skillforge/browse/ /usr/share/nginx/html/

# 4. Set correct permissions for the Nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# 5. Copy your custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 6. Expose port 80 and start Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
