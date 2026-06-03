FROM nginx:alpine

# 1. Clear default
RUN rm -rf /usr/share/nginx/html/*

# 2. Copy files
COPY skillforge/browser/ /usr/share/nginx/html/app/

# 3. Permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# 4. Copy config - Replace the main nginx config to avoid conflicts
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
