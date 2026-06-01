FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY skillforge/ /usr/share/nginx/html/app/

# CRITICAL: Ensure Nginx can read the files
RUN chown -R nginx:nginx /usr/share/nginx/html/app && \
    chmod -R 755 /usr/share/nginx/html/app

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
