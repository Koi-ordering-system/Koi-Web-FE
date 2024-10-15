# Stage 1: Base image with build tools
FROM oven/bun:canary AS base

ARG VITE_API_URL_BE
ARG VITE_CLERK_PUBLISHABLE_KEY

# Set the environment variables
ENV VITE_API_URL_BE=${VITE_API_URL_BE:-https://koi-api.persiehomeserver.com}
ENV VITE_CLERK_PUBLISHABLE_KEY=${VITE_CLERK_PUBLISHABLE_KEY:-pk_test_c2hhcmluZy1jb2x0LTQxLmNsZXJrLmFjY291bnRzLmRldiQ}

# Set the working directory inside the container
WORKDIR /usr/src/app
# Stage 2: Install dependencies
FROM base AS install

# Create a temporary directory for development dependencies
RUN mkdir -p /temp/dev

# Copy package.json and bun.lockb files
COPY package.json bun.lockb /temp/dev/

# Install development dependencies
RUN cd /temp/dev && bun install --frozen-lockfile

# Stage 3: Build the application
FROM base AS build

# Copy installed dependencies from the install stage
COPY --from=install /temp/dev/node_modules /usr/src/app/node_modules


# Copy the rest of the application code
COPY . .

# Build the React TypeScript application
ENV NODE_ENV=production
RUN bun run build

# Stage 4: Production image with nginx
FROM nginx:alpine AS release

# Copy the built application from the build stage
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port on which the application will run
EXPOSE 80

# Start the web server
CMD ["nginx", "-g", "daemon off;"]