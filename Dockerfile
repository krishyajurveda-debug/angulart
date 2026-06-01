FROM nginx:alpine

# Clear default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy the contents of the browse folder to the root of the server
COPY skillforge/browse/ /usr/share/nginx/html/

# Fix permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
