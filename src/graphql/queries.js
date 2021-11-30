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
          _version
          _deleted
          _lastChangedAt
          sprinklerProfileDaySettingsId
          owner
        }
        nextToken
        startedAt
      }
      zoneSettings {
        items {
          runMinutes
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sprinklerProfileZoneSettingsId
          zoneSettingZoneId
          owner
        }
        nextToken
        startedAt
      }
      owner
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        zoneSettings {
          nextToken
          startedAt
        }
        owner
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSprinklerProfiles = /* GraphQL */ `
  query SyncSprinklerProfiles(
    $filter: ModelSprinklerProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSprinklerProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        name
        active
        weeklyWaterAmount
        daySettings {
          nextToken
          startedAt
        }
        zoneSettings {
          nextToken
          startedAt
        }
        owner
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncZones = /* GraphQL */ `
  query SyncZones(
    $filter: ModelZoneFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncZones(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        zoneNumber
        name
        description
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
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
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sprinklerProfileDaySettingsId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDaySettings = /* GraphQL */ `
  query SyncDaySettings(
    $filter: ModelDaySettingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDaySettings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        day
        active
        startTime
        zoneSettings {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sprinklerProfileDaySettingsId
        owner
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          owner
        }
        runMinutes
        daySettings {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sprinklerProfileZoneSettingsId
        zoneSettingZoneId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncZoneSettings = /* GraphQL */ `
  query SyncZoneSettings(
    $filter: ModelZoneSettingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncZoneSettings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        zone {
          id
          zoneNumber
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        runMinutes
        daySettings {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sprinklerProfileZoneSettingsId
        zoneSettingZoneId
        owner
      }
      nextToken
      startedAt
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
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          owner
        }
        runMinutes
        daySettings {
          nextToken
          startedAt
        }
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        sprinklerProfileZoneSettingsId
        zoneSettingZoneId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          sprinklerProfileDaySettingsId
          owner
        }
        zoneSetting {
          runMinutes
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sprinklerProfileZoneSettingsId
          zoneSettingZoneId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncZoneDays = /* GraphQL */ `
  query SyncZoneDays(
    $filter: ModelZoneDaysFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncZoneDays(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
          _version
          _deleted
          _lastChangedAt
          sprinklerProfileDaySettingsId
          owner
        }
        zoneSetting {
          runMinutes
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          sprinklerProfileZoneSettingsId
          zoneSettingZoneId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
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
          startedAt
        }
        zoneSettings {
          nextToken
          startedAt
        }
        owner
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
