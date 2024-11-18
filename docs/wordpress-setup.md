# WordPress GraphQL Setup Guide

## Prerequisites

1. Install required WordPress plugins:
   - WPGraphQL (v1.14.0 or higher)
   - Advanced Custom Fields PRO
   - WPGraphQL for Advanced Custom Fields

## ACF Field Groups Setup

### Article Fields
```json
{
  "key": "group_article",
  "title": "Article Details",
  "fields": [
    {
      "key": "field_difficulty",
      "label": "Difficulty Level",
      "name": "difficulty",
      "type": "select",
      "choices": {
        "beginner": "Beginner",
        "intermediate": "Intermediate",
        "advanced": "Advanced"
      }
    },
    {
      "key": "field_reading_time",
      "label": "Reading Time",
      "name": "reading_time",
      "type": "number"
    },
    {
      "key": "field_ai_model",
      "label": "AI Model",
      "name": "ai_model",
      "type": "text"
    }
  ]
}
```

### Service Fields
```json
{
  "key": "group_service",
  "title": "AI Service Details",
  "fields": [
    {
      "key": "field_rating",
      "label": "Rating",
      "name": "rating",
      "type": "number"
    },
    {
      "key": "field_service_provider",
      "label": "Service Provider",
      "name": "service_provider",
      "type": "text"
    },
    {
      "key": "field_pricing_tiers",
      "label": "Pricing Tiers",
      "name": "pricing_tiers",
      "type": "repeater",
      "sub_fields": [
        {
          "key": "field_tier_name",
          "label": "Tier Name",
          "name": "tier_name",
          "type": "text"
        },
        {
          "key": "field_price",
          "label": "Price",
          "name": "price",
          "type": "text"
        }
      ]
    }
  ]
}
```