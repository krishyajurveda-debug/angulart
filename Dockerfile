FROM nginx:alpine

# Remove default site
RUN rm -rf /usr/share/nginx/html/*

# Copy your built Angular files
COPY skillforge /usr/share/nginx/html/app/

# Overwrite the default Nginx configuration file directly
# This is usually where the 'localhost' server block resides
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
