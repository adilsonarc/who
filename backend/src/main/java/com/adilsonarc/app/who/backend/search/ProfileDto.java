package com.adilsonarc.app.who.backend.search;

import java.net.URI;
import java.time.Duration;

public record ProfileDto(String name,
                         String profile,
                         URI link,
                         Duration timestamp) {
}
