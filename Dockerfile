FROM nginx:alpine

# 1. Clear default
RUN rm -rf /usr/share/nginx/html/*

# 2. Copy contents to a subfolder named 'app'
# This creates /usr/share/nginx/html/app/
COPY skillforge/browser/ /usr/share/nginx/html/app/

# 3. Permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# 4. Config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
