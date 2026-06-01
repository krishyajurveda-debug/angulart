FROM nginx:alpine

# 1. Clear default
RUN rm -rf /usr/share/nginx/html/*

# 2. DEBUG: List files to confirm the path exists
RUN ls -R skillforge

# 3. Copy contents of the browse folder to the nginx root
# We use this because your index.html is in 'skillforge/browse/'
COPY skillforge/browse/ /usr/share/nginx/html/

# 4. Permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# 5. Config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
