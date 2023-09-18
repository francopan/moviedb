agent {
    // Equivalent to "docker build -f Dockerfile.build --build-arg version=1.0.2 ./build/
    dockerfile {
        filename 'Dockerfile.build'
        dir 'build'
        label 'Building App'
        additionalBuildArgs  '--build-arg version=1.0.2'
    }
}