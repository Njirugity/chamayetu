package com.chamayetu.chamayetu.util.annotation;

import org.springframework.stereotype.Service;

import java.lang.annotation.*;

/**
 * This annotation will be used to create a Facade Component, it is
 * like @Service and @Component
 *
 * @author smaina
 *
 */
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Service
public @interface Facade {

	/**
	 * The value may indicate a suggestion for a logical component name, to be
	 * turned into a Spring bean in case of an autodetected component.
	 *
	 * @return the suggested component name, if any
	 */
	String value() default "";

}
