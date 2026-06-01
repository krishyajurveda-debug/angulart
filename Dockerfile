FROM nginx:alpine

# Clear default files
RUN rm -rf /usr/share/nginx/html/*

# Copy your folder "dist/skillforge" into the Nginx html directory
# This results in the files being at /usr/share/nginx/html/app/
COPY skillforge /usr/share/nginx/html/app

# Copy the custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
