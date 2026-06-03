FROM nginx:alpine

# 1. Clear default
RUN rm -rf /usr/share/nginx/html/*

# 2. Copy your files to the 'app' subdirectory
# This ensures files live at /usr/share/nginx/html/app/index.html
COPY skillforge/browser/ /usr/share/nginx/html/app/

# 3. Fix permissions (Ensure the user 'nginx' can read these files)
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# 4. Copy config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
