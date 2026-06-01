FROM nginx:alpine

# Remove everything
RUN rm -rf /usr/share/nginx/html/*

# Copy your files
COPY skillforge/ /usr/share/nginx/html/app/

# VERIFY: This line will print the file list in your Render logs
# Look at this output in your next deployment to see where the files REALLY are
RUN ls -R /usr/share/nginx/html/app/

# Permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
