/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSprinklerProfile = /* GraphQL */ `
  subscription OnCreateSprinklerProfile($owner: String) {
    onCreateSprinklerProfile(owner: $owner) {
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
export const onUpdateSprinklerProfile = /* GraphQL */ `
  subscription OnUpdateSprinklerProfile($owner: String) {
    onUpdateSprinklerProfile(owner: $owner) {
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
export const onDeleteSprinklerProfile = /* GraphQL */ `
  subscription OnDeleteSprinklerProfile($owner: String) {
    onDeleteSprinklerProfile(owner: $owner) {
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
export const onCreateZone = /* GraphQL */ `
  subscription OnCreateZone($owner: String) {
    onCreateZone(owner: $owner) {
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
export const onUpdateZone = /* GraphQL */ `
  subscription OnUpdateZone($owner: String) {
    onUpdateZone(owner: $owner) {
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
export const onDeleteZone = /* GraphQL */ `
  subscription OnDeleteZone($owner: String) {
    onDeleteZone(owner: $owner) {
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
export const onCreateDaySetting = /* GraphQL */ `
  subscription OnCreateDaySetting($owner: String) {
    onCreateDaySetting(owner: $owner) {
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
export const onUpdateDaySetting = /* GraphQL */ `
  subscription OnUpdateDaySetting($owner: String) {
    onUpdateDaySetting(owner: $owner) {
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
export const onDeleteDaySetting = /* GraphQL */ `
  subscription OnDeleteDaySetting($owner: String) {
    onDeleteDaySetting(owner: $owner) {
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
export const onCreateZoneSetting = /* GraphQL */ `
  subscription OnCreateZoneSetting($owner: String) {
    onCreateZoneSetting(owner: $owner) {
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
export const onUpdateZoneSetting = /* GraphQL */ `
  subscription OnUpdateZoneSetting($owner: String) {
    onUpdateZoneSetting(owner: $owner) {
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
export const onDeleteZoneSetting = /* GraphQL */ `
  subscription OnDeleteZoneSetting($owner: String) {
    onDeleteZoneSetting(owner: $owner) {
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
export const onCreateZoneDays = /* GraphQL */ `
  subscription OnCreateZoneDays($owner: String) {
    onCreateZoneDays(owner: $owner) {
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
export const onUpdateZoneDays = /* GraphQL */ `
  subscription OnUpdateZoneDays($owner: String) {
    onUpdateZoneDays(owner: $owner) {
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
export const onDeleteZoneDays = /* GraphQL */ `
  subscription OnDeleteZoneDays($owner: String) {
    onDeleteZoneDays(owner: $owner) {
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
