package cloud.config;

import javax.servlet.MultipartConfigElement;

import org.springframework.boot.web.servlet.MultipartConfigFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class FileUploadConfiguration {

    @Bean
    public MultipartConfigElement multipartConfigElement() {

        MultipartConfigFactory factory = new MultipartConfigFactory();

        factory.setMaxFileSize("2000KB"); // KB,MB

        factory.setMaxRequestSize("50MB");

//        factory.setLocation("/Users/mac/Desktop/java-spring-rest-api/upload/");

        return factory.createMultipartConfig();
    }
}