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
export const onCreateZone = /* GraphQL */ `
  subscription OnCreateZone($owner: String) {
    onCreateZone(owner: $owner) {
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
export const onUpdateZone = /* GraphQL */ `
  subscription OnUpdateZone($owner: String) {
    onUpdateZone(owner: $owner) {
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
export const onDeleteZone = /* GraphQL */ `
  subscription OnDeleteZone($owner: String) {
    onDeleteZone(owner: $owner) {
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
