export enum UserRole {
  SUPER_ADMIN = 'Super Admin',
  ORG_ADMIN = 'Organization Admin',
  ORG_ASSIGNED_USER = 'Organization Assigned User',
  ORG_USER = 'Organization User',
}

export enum UserRoleEnumValue {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ORG_ADMIN = 'ORG_ADMIN',
  ORG_ASSIGNED_USER = 'ORG_ASSIGNED_USER',
  ORG_USER = 'ORG_USER',
}

export enum UserAssistantRole {
  ASSISTANT_ADMIN = 'Assistant Admin',
  ARCHITECT_MAKER = 'Assistant Architect Maker',
  ARCHITECT_CHECKER = 'Assistant Architect Checker',
  BUSINESS_ANALYST = 'Assistant Business Analyst',
  DATA_ANNOTATOR = 'Assistant Data Annotator',
  ASSISTANT_TESTER = 'Assistant Tester',
}

export enum UserAssistantRoleEnumValue {
  ASSISTANT_ADMIN = 'ASSISTANT_ADMIN',
  ARCHITECT_MAKER = 'ARCHITECT_MAKER',
  ARCHITECT_CHECKER = 'ARCHITECT_CHECKER',
  BUSINESS_ANALYST = 'BUSINESS_ANALYST',
  DATA_ANNOTATOR = 'DATA_ANNOTATOR',
  ASSISTANT_TESTER = 'ASSISTANT_TESTER',
}

export enum UpdatableStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
}

export enum statusEnumValue {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum AssistantVersionStatus {
  NEED_CHANGES = 'NEED_CHANGES',
  REJECTED = 'REJECTED',
  IN_DEVELOPMENT = 'IN_DEVELOPMENT',
  DEV_REVISION = 'DEV_REVISION',
  TEST_REVISION = 'TEST_REVISION',
  READY_FOR_REVIEW = 'READY_FOR_REVIEW',
  IN_REVIEW = 'IN_REVIEW',
  READY_FOR_TEST = 'READY_FOR_TEST',
  IN_TESTING = 'IN_TESTING',
}

export enum CryptographicProcess {
  HASHING = 'Hashing',
  ENCRYPT = 'Encrypt',
  DECRYPT = 'Decrypt',
  BOTH = 'Both',
}

export enum CryptographicProcessEnumValue {
  Hashing = 'HASHING',
  Encrypt = 'ENCRYPT',
  Decrypt = 'DECRYPT',
  Both = 'BOTH',
}

export enum CryptographicType {
  ONE_WAY_HASHING = 'One way hashing',
  ASYMMETRIC_KEY = 'Asymmetric Key',
  SYMMETRIC_KEY = 'Symmetric Key',
}

export enum CryptographicTypeEnumValue {
  'One way hashing' = 'ONE_WAY_HASHING',
  'Asymmetric Key' = 'ASYMMETRIC_KEY',
  'Symmetric Key' = 'SYMMETRIC_KEY',
}

export enum CryptographicAlgorithm {
  BCRYPT = 'Bcrypt One way hashing Algorithm',
  RSA = 'RSA Asymmetric Algorithm',
  AES = 'AES Symmetric Algorithm',
}

export enum CryptographicAlgorithmEnumValue {
  'Bcrypt One way hashing Algorithm' = 'BCRYPT',
  'RSA Asymmetric Algorithm' = 'RSA',
  'AES Symmetric Algorithm' = 'AES',
}
