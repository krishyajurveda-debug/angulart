FROM nginx:alpine

# Remove default site
RUN rm -rf /usr/share/nginx/html/*

# Copy your built Angular files
COPY skillforge/ /usr/share/nginx/html/app/

# CRITICAL: Fix ownership and permissions
# This ensures the 'nginx' user can read your files
RUN chown -R nginx:nginx /usr/share/nginx/html/app && \
    chmod -R 755 /usr/share/nginx/html/app

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
