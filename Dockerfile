FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*

# Copy files
COPY skillforge/ /usr/share/nginx/html/app/

# CRITICAL: Fix permissions for every parent folder
RUN chmod -R 755 /usr/share/nginx/html && \
    chown -R nginx:nginx /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
