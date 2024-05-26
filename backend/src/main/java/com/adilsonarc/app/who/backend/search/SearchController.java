package com.adilsonarc.app.who.backend.search;

import com.github.javafaker.Faker;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.time.Duration;
import java.util.List;
import java.util.Locale;
import java.util.stream.IntStream;

@RestController
@RequestMapping("/api/v1/search")
public class SearchController {

    @GetMapping
    public List<ProfileDto> search(@RequestParam String videoLink,
                                   HttpServletResponse response
    ) {
        try {
            Thread.sleep(5000L);
        } catch (InterruptedException e) {

        }
        response.setStatus(501);
        return List.of();
        /*
        Faker faker = new Faker(new Locale("PT-PT"));

        return IntStream.range(0, 50)
                .mapToObj(i -> new ProfileDto(
                        faker.name().name(),
                        faker.funnyName().name(),
                        URI.create(faker.internet().url().replace(" ", "")),
                        Duration.ofHours(faker.number().numberBetween(0, 100))
                                .withSeconds(faker.number().numberBetween(1, 59))))
                .toList();
         */

    }
}
