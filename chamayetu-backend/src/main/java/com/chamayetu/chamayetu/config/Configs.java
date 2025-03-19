package com.chamayetu.chamayetu.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.SimpleAsyncTaskExecutor;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.X509Certificate;

@Configuration
public class Configs {
    @Bean
    public RestTemplate restTemplate() {
        try {
            // Create a custom TrustManager that trusts all certificates
            TrustManager[] trustAllCerts = new TrustManager[]{new X509TrustManager() {
                public X509Certificate[] getAcceptedIssuers() {
                    return null;
                }

                public void checkClientTrusted(X509Certificate[] certs, String authType) {
                }

                public void checkServerTrusted(X509Certificate[] certs, String authType) {
                }
            }};

            // Create an SSLContext with the custom TrustManager
            SSLContext sslContext = SSLContext.getInstance("TLS");
            sslContext.init(null, trustAllCerts, new java.security.SecureRandom());

            // Create a RestTemplate with SSL verification disabled
            CustomSimpleClientHttpRequestFactory requestFactory = new CustomSimpleClientHttpRequestFactory();
            requestFactory.setTaskExecutor(new SimpleAsyncTaskExecutor());
            requestFactory.setConnectTimeout(5000);
            requestFactory.setReadTimeout(5000);
            requestFactory.setBufferRequestBody(false);
            requestFactory.setSslContext(sslContext);

            return new RestTemplate(requestFactory);

        } catch (NoSuchAlgorithmException | KeyManagementException e) {
            throw new RuntimeException("Error creating RestTemplate with SSL verification disabled", e);
        }
    }

    private static class CustomSimpleClientHttpRequestFactory extends SimpleClientHttpRequestFactory {
        private SSLContext sslContext;

        public void setSslContext(SSLContext sslContext) {
            this.sslContext = sslContext;
        }

        @Override
        protected void prepareConnection(HttpURLConnection connection, String httpMethod) throws IOException {
            if (connection instanceof HttpsURLConnection && sslContext != null) {
                ((HttpsURLConnection) connection).setSSLSocketFactory(sslContext.getSocketFactory());
                ((HttpsURLConnection) connection).setHostnameVerifier((hostname, session) -> true);
            }
            super.prepareConnection(connection, httpMethod);
        }
    }
}
