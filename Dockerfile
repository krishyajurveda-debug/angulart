FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

# The trailing slash on 'skillforge/' copies the CONTENTS
COPY skillforge/ /usr/share/nginx/html/app/

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
