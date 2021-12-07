/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSprinklerProfile = /* GraphQL */ `
  mutation CreateSprinklerProfile(
    $input: CreateSprinklerProfileInput!
    $condition: ModelSprinklerProfileConditionInput
  ) {
    createSprinklerProfile(input: $input, condition: $condition) {
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
export const updateSprinklerProfile = /* GraphQL */ `
  mutation UpdateSprinklerProfile(
    $input: UpdateSprinklerProfileInput!
    $condition: ModelSprinklerProfileConditionInput
  ) {
    updateSprinklerProfile(input: $input, condition: $condition) {
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
export const deleteSprinklerProfile = /* GraphQL */ `
  mutation DeleteSprinklerProfile(
    $input: DeleteSprinklerProfileInput!
    $condition: ModelSprinklerProfileConditionInput
  ) {
    deleteSprinklerProfile(input: $input, condition: $condition) {
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
export const createZone = /* GraphQL */ `
  mutation CreateZone(
    $input: CreateZoneInput!
    $condition: ModelZoneConditionInput
  ) {
    createZone(input: $input, condition: $condition) {
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
export const updateZone = /* GraphQL */ `
  mutation UpdateZone(
    $input: UpdateZoneInput!
    $condition: ModelZoneConditionInput
  ) {
    updateZone(input: $input, condition: $condition) {
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
export const deleteZone = /* GraphQL */ `
  mutation DeleteZone(
    $input: DeleteZoneInput!
    $condition: ModelZoneConditionInput
  ) {
    deleteZone(input: $input, condition: $condition) {
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
export const createDaySetting = /* GraphQL */ `
  mutation CreateDaySetting(
    $input: CreateDaySettingInput!
    $condition: ModelDaySettingConditionInput
  ) {
    createDaySetting(input: $input, condition: $condition) {
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
export const updateDaySetting = /* GraphQL */ `
  mutation UpdateDaySetting(
    $input: UpdateDaySettingInput!
    $condition: ModelDaySettingConditionInput
  ) {
    updateDaySetting(input: $input, condition: $condition) {
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
export const deleteDaySetting = /* GraphQL */ `
  mutation DeleteDaySetting(
    $input: DeleteDaySettingInput!
    $condition: ModelDaySettingConditionInput
  ) {
    deleteDaySetting(input: $input, condition: $condition) {
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
export const createZoneSetting = /* GraphQL */ `
  mutation CreateZoneSetting(
    $input: CreateZoneSettingInput!
    $condition: ModelZoneSettingConditionInput
  ) {
    createZoneSetting(input: $input, condition: $condition) {
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
export const updateZoneSetting = /* GraphQL */ `
  mutation UpdateZoneSetting(
    $input: UpdateZoneSettingInput!
    $condition: ModelZoneSettingConditionInput
  ) {
    updateZoneSetting(input: $input, condition: $condition) {
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
export const deleteZoneSetting = /* GraphQL */ `
  mutation DeleteZoneSetting(
    $input: DeleteZoneSettingInput!
    $condition: ModelZoneSettingConditionInput
  ) {
    deleteZoneSetting(input: $input, condition: $condition) {
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
export const createZoneDays = /* GraphQL */ `
  mutation CreateZoneDays(
    $input: CreateZoneDaysInput!
    $condition: ModelZoneDaysConditionInput
  ) {
    createZoneDays(input: $input, condition: $condition) {
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
export const updateZoneDays = /* GraphQL */ `
  mutation UpdateZoneDays(
    $input: UpdateZoneDaysInput!
    $condition: ModelZoneDaysConditionInput
  ) {
    updateZoneDays(input: $input, condition: $condition) {
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
export const deleteZoneDays = /* GraphQL */ `
  mutation DeleteZoneDays(
    $input: DeleteZoneDaysInput!
    $condition: ModelZoneDaysConditionInput
  ) {
    deleteZoneDays(input: $input, condition: $condition) {
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
