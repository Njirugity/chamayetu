package com.chamayetu.chamayetu.config.security;

//import com.indra.cms.util.RequestLogger;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

//	@Bean
//	public CommonsRequestLoggingFilter requestLoggingFilter() {
////		final CommonsRequestLoggingFilter filter = new RequestLogger();
//		filter.setIncludeQueryString(true);
//		filter.setIncludePayload(true);
//		filter.setMaxPayloadLength(10000);
//		filter.setIncludeHeaders(true);
//		filter.setAfterMessagePrefix("REQUEST DATA : ");
//
//		return filter;
//	}

	@Override
	protected void configure(final HttpSecurity http) throws Exception {
		// http.addFilterBefore(corsFilter, ChannelProcessingFilter.class);
		//		http.authorizeRequests().antMatchers("/**").permitAll();
		http.csrf().disable();
		// enable the download of pdf
		http.headers().defaultsDisabled();
		http.headers().contentTypeOptions();
		// end of pdf enabling
		http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		// to prevent click jacking attacks
		http.headers().frameOptions().sameOrigin();
		http.headers().httpStrictTransportSecurity().disable();
		http.headers().cacheControl();
		// to prevent XSS attacks
		http.headers().xssProtection().block(false);
		// Cntent security Policy
		http.headers().contentSecurityPolicy("script-src 'self' ; object-src ; report-uri");
		// add referrer policy
		// http.headers()
		// .referrerPolicy(ReferrerPolicy.SAME_ORIGIN);
		// to ensure that the browser always uses Https
		// http.headers().httpStrictTransportSecurity().includeSubDomains(true).maxAgeInSeconds(31536000);

	}

	/* To allow Pre-flight [OPTIONS] request from browser */
	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers(HttpMethod.OPTIONS, "/**");
	}
	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}
}
