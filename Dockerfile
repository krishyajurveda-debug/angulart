FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*

# Copy contents of skillforge into the app folder
COPY skillforge/ /usr/share/nginx/html/app/

# Debug: Print the structure to your logs
RUN ls -la /usr/share/nginx/html/app/

RUN chown -R nginx:nginx /usr/share/nginx/html/app && chmod -R 755 /usr/share/nginx/html/app
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
