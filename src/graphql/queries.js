/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSprinklerProfile = /* GraphQL */ `
  query GetSprinklerProfile($id: ID!) {
    getSprinklerProfile(id: $id) {
      name
      active
      weeklyWaterAmount
      daySettings {
        items {
          day
          active
          startTime
          id
          createdAt
          updatedAt
          sprinklerProfileDaySettingsId
          owner
        }
        nextToken
      }
      zoneSettings {
        items {
          runMinutes
          id
          createdAt
          updatedAt
          sprinklerProfileZoneSettingsId
          zoneSettingZoneId
          owner
        }
        nextToken
      }
      owner
      id
      createdAt
      updatedAt
    }
  }
`;
export const listSprinklerProfiles = /* GraphQL */ `
  query ListSprinklerProfiles(
    $filter: ModelSprinklerProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSprinklerProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        active
        weeklyWaterAmount
        daySettings {
          nextToken
        }
        zoneSettings {
          nextToken
        }
        owner
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getZone = /* GraphQL */ `
  query GetZone($id: ID!) {
    getZone(id: $id) {
      id
      zoneNumber
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listZones = /* GraphQL */ `
  query ListZones(
    $filter: ModelZoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        zoneNumber
        name
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getDaySetting = /* GraphQL */ `
  query GetDaySetting($id: ID!) {
    getDaySetting(id: $id) {
      day
      active
      startTime
      zoneSettings {
        items {
          id
          daySettingID
          zoneSettingID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      sprinklerProfileDaySettingsId
      owner
    }
  }
`;
export const listDaySettings = /* GraphQL */ `
  query ListDaySettings(
    $filter: ModelDaySettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDaySettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        day
        active
        startTime
        zoneSettings {
          nextToken
        }
        id
        createdAt
        updatedAt
        sprinklerProfileDaySettingsId
        owner
      }
      nextToken
    }
  }
`;
export const getZoneSetting = /* GraphQL */ `
  query GetZoneSetting($id: ID!) {
    getZoneSetting(id: $id) {
      zone {
        id
        zoneNumber
        name
        description
        createdAt
        updatedAt
        owner
      }
      runMinutes
      daySettings {
        items {
          id
          daySettingID
          zoneSettingID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      id
      createdAt
      updatedAt
      sprinklerProfileZoneSettingsId
      zoneSettingZoneId
      owner
    }
  }
`;
export const listZoneSettings = /* GraphQL */ `
  query ListZoneSettings(
    $filter: ModelZoneSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZoneSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        zone {
          id
          zoneNumber
          name
          description
          createdAt
          updatedAt
          owner
        }
        runMinutes
        daySettings {
          nextToken
        }
        id
        createdAt
        updatedAt
        sprinklerProfileZoneSettingsId
        zoneSettingZoneId
        owner
      }
      nextToken
    }
  }
`;
export const getZoneDays = /* GraphQL */ `
  query GetZoneDays($id: ID!) {
    getZoneDays(id: $id) {
      id
      daySettingID
      zoneSettingID
      daySetting {
        day
        active
        startTime
        zoneSettings {
          nextToken
        }
        id
        createdAt
        updatedAt
        sprinklerProfileDaySettingsId
        owner
      }
      zoneSetting {
        zone {
          id
          zoneNumber
          name
          description
          createdAt
          updatedAt
          owner
        }
        runMinutes
        daySettings {
          nextToken
        }
        id
        createdAt
        updatedAt
        sprinklerProfileZoneSettingsId
        zoneSettingZoneId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listZoneDays = /* GraphQL */ `
  query ListZoneDays(
    $filter: ModelZoneDaysFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listZoneDays(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        daySettingID
        zoneSettingID
        daySetting {
          day
          active
          startTime
          id
          createdAt
          updatedAt
          sprinklerProfileDaySettingsId
          owner
        }
        zoneSetting {
          runMinutes
          id
          createdAt
          updatedAt
          sprinklerProfileZoneSettingsId
          zoneSettingZoneId
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const sprinklerProfileByOwner = /* GraphQL */ `
  query SprinklerProfileByOwner(
    $owner: String
    $sortDirection: ModelSortDirection
    $filter: ModelSprinklerProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    sprinklerProfileByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        name
        active
        weeklyWaterAmount
        daySettings {
          nextToken
        }
        zoneSettings {
          nextToken
        }
        owner
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
