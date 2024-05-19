package com.adilsonarc.app.who.backend.search;

import java.net.URI;
import java.time.Duration;
import java.time.LocalDateTime;

public record SearchResponseDTO(String name,
                                String profile,
                                URI link,
                                Duration time) {
}
