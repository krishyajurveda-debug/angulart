FROM nginx:alpine

# Clear default Nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy your files directly to the root html folder
# NOTE: Ensure you are copying the CONTENTS of 'skillforge', not the folder itself
COPY skillforge/ /usr/share/nginx/html/

# Permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
