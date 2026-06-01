FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*

# Copy the contents of skillforge into the app folder
COPY skillforge/ /usr/share/nginx/html/app/

# Set permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
