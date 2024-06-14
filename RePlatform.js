var RePlatformData = [
  {
    "table_name": "AbpUserOrganizationUnits",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "OrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "AbpUserRoles",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "RoleId",
        "data_type": "int"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FAApplication_DeclineDetails",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DeclineDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "IsSendDeclineEmail",
        "data_type": "bit"
      },
      {
        "column_name": "IsSendDeclineLetter",
        "data_type": "bit"
      },
      {
        "column_name": "SendEmailTo",
        "data_type": "int"
      },
      {
        "column_name": "Comments",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DeclineReasons_Id",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DeclineReasons_Text",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EmailSendContacts_Id",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DeclineNotificationEmailTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DeclineLetterTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAApplication_MainId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "DeclineNotificationEmailTemplateId",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAApplication_MainId",
        "referenced_table_name": "FAApplication_Mains",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "DeclineLetterTemplateId",
        "referenced_table_name": "LetterTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpUsers",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "AccessFailedCount",
        "data_type": "int"
      },
      {
        "column_name": "AuthenticationSource",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ConcurrencyStamp",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "EmailAddress",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EmailConfirmationCode",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "IsEmailConfirmed",
        "data_type": "bit"
      },
      {
        "column_name": "IsLockoutEnabled",
        "data_type": "bit"
      },
      {
        "column_name": "IsPhoneNumberConfirmed",
        "data_type": "bit"
      },
      {
        "column_name": "IsTwoFactorEnabled",
        "data_type": "bit"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LockoutEndDateUtc",
        "data_type": "datetime2"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "NormalizedEmailAddress",
        "data_type": "nvarchar"
      },
      {
        "column_name": "NormalizedUserName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Password",
        "data_type": "nvarchar"
      },
      {
        "column_name": "PasswordResetCode",
        "data_type": "nvarchar"
      },
      {
        "column_name": "PhoneNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProfilePictureId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "SecurityStamp",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ShouldChangePasswordOnNextLogin",
        "data_type": "bit"
      },
      {
        "column_name": "Surname",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "SignInToken",
        "data_type": "nvarchar"
      },
      {
        "column_name": "SignInTokenExpireTimeUtc",
        "data_type": "datetime2"
      },
      {
        "column_name": "GoogleAuthenticatorKey",
        "data_type": "nvarchar"
      },
      {
        "column_name": "RecoveryCode",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "CreatorUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "DeleterUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "LastModifierUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpUserTokens",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "LoginProvider",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Value",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ExpireDate",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpWebhookEvents",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "WebhookName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Data",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "AbpWebhookSendAttempts",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "WebhookEventId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "WebhookSubscriptionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Response",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ResponseStatusCode",
        "data_type": "int"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "WebhookEventId",
        "referenced_table_name": "AbpWebhookEvents",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpWebhookSubscriptions",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "WebhookUri",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Secret",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "Webhooks",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Headers",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "Addresses",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AddressLine1",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AddressLine2",
        "data_type": "nvarchar"
      },
      {
        "column_name": "City",
        "data_type": "nvarchar"
      },
      {
        "column_name": "State",
        "data_type": "nvarchar"
      },
      {
        "column_name": "County",
        "data_type": "nvarchar"
      },
      {
        "column_name": "PostalCode",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Country",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CityCode",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CountryCode",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CountyCode",
        "data_type": "nvarchar"
      },
      {
        "column_name": "StateCode",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "AppBinaryObjects",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Bytes",
        "data_type": "varbinary"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "Description",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "AppChatMessages",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "Message",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ReadState",
        "data_type": "int"
      },
      {
        "column_name": "Side",
        "data_type": "int"
      },
      {
        "column_name": "TargetTenantId",
        "data_type": "int"
      },
      {
        "column_name": "TargetUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "SharedMessageId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReceiverReadState",
        "data_type": "int"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "ReviewWorkflowTemplates",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "WorkflowTemplateName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TemplateType",
        "data_type": "int"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "BusinessUnit",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "FOAnnouncementId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsForFOAnnouncement",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "BusinessUnit",
        "referenced_table_name": "CustomOrganizationUnits",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOAnnouncementId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AppFriendships",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "FriendProfilePictureId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FriendTenancyName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FriendTenantId",
        "data_type": "int"
      },
      {
        "column_name": "FriendUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "FriendUserName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "State",
        "data_type": "int"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "AppInvoices",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "int"
      },
      {
        "column_name": "InvoiceDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "InvoiceNo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantAddress",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantLegalName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantTaxNo",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "FAApplication_Negotiations",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "NegotiationId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Status",
        "data_type": "int"
      },
      {
        "column_name": "DueDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "AmendmentDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "IsBudgetNegotiation",
        "data_type": "bit"
      },
      {
        "column_name": "BudgetInstruction",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsProjectPlanNegotiation",
        "data_type": "bit"
      },
      {
        "column_name": "ProjectPlanInstruction",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AdditionalComment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ForceEndDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "FAApplication_MainId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "EndUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "EndUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAApplication_MainId",
        "referenced_table_name": "FAApplication_Mains",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ApplicantSignupQuestions",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "QuestionName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Description",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AnswerAccepted",
        "data_type": "bit"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "AppRecentPasswords",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Password",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "AppSubscriptionPayments",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "Amount",
        "data_type": "decimal"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DayCount",
        "data_type": "int"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "EditionId",
        "data_type": "int"
      },
      {
        "column_name": "Gateway",
        "data_type": "int"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "SuccessUrl",
        "data_type": "nvarchar"
      },
      {
        "column_name": "PaymentPeriodType",
        "data_type": "int"
      },
      {
        "column_name": "Status",
        "data_type": "int"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "InvoiceNo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Description",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ErrorUrl",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ExternalPaymentId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsRecurring",
        "data_type": "bit"
      },
      {
        "column_name": "EditionPaymentType",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "EditionId",
        "referenced_table_name": "AbpEditions",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AppSubscriptionPaymentsExtensionData",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "SubscriptionPaymentId",
        "data_type": "bigint"
      },
      {
        "column_name": "Key",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Value",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "AppUserDelegations",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "SourceUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TargetUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "StartTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "EndTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "AssistanceListings",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "RowChecksum",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Code",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Designation",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "Awards_Appropriations",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Appropriation_StartDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "Appropriation_EndDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "Appropriation_Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Appropriation_Title",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Appropriation_Amount",
        "data_type": "decimal"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "BusinessUnit",
        "data_type": "bigint"
      },
      {
        "column_name": "Appropriation_Type",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FundId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "AssistanceListingId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "AssistanceListingId",
        "referenced_table_name": "AssistanceListings",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "BusinessUnit",
        "referenced_table_name": "CustomOrganizationUnits",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundId",
        "referenced_table_name": "Funds",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "Appropriation_Type",
        "referenced_table_name": "StringMapItems",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FAApplication_ProjectPlans",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ProjectPlanSubmitted",
        "data_type": "bit"
      },
      {
        "column_name": "ProjectPlanReset",
        "data_type": "bit"
      },
      {
        "column_name": "MainProjectPlanTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAApplication_MainId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FAApplication_MainId",
        "referenced_table_name": "FAApplication_Mains",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "MainProjectPlanTemplateId",
        "referenced_table_name": "MainProjectPlanTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "BudgetTemplateForFAs",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "MainBudgetTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "MainBudgetTemplateId",
        "referenced_table_name": "MainBudgetTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ReviewWorkflowSteps",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "StepName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsEligibility",
        "data_type": "bit"
      },
      {
        "column_name": "IsRedact",
        "data_type": "bit"
      },
      {
        "column_name": "IsSection",
        "data_type": "bit"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "Order",
        "data_type": "int"
      },
      {
        "column_name": "HavePanels",
        "data_type": "bit"
      },
      {
        "column_name": "HaveIndividualReviewer",
        "data_type": "bit"
      },
      {
        "column_name": "IsTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "ReviewWorkflowTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ReviewWorkflowTemplateId",
        "referenced_table_name": "ReviewWorkflowTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "Contacts",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FirstName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "MiddleName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "LastName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "JobTitle",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProfileName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "SkypeID",
        "data_type": "nvarchar"
      },
      {
        "column_name": "PhoneNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FaxNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Email",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ContactType",
        "data_type": "int"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "AddressId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "ContactPrograms",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ContactTypes",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsConfidential",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "AddressId",
        "referenced_table_name": "Addresses",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "OrganizationId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "IndividualReviewers",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "IsForWorkflow",
        "data_type": "bit"
      },
      {
        "column_name": "IsDoRedact",
        "data_type": "bit"
      },
      {
        "column_name": "IsDoEligibility",
        "data_type": "bit"
      },
      {
        "column_name": "SectionTemplate",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ReviewWorkflowTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewWorkflowStepId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "ContactId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "AddedDocumentIds",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ContactId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewWorkflowStepId",
        "referenced_table_name": "ReviewWorkflowSteps",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewWorkflowTemplateId",
        "referenced_table_name": "ReviewWorkflowTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "CustomOrganizationUnits",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "Code",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DisplayName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "CustomUserOrganizationUnits",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "OrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "RoleId",
        "data_type": "int"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CustomOrganizationUnitId",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "RoleId",
        "referenced_table_name": "AbpRoles",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "CustomOrganizationUnitId",
        "referenced_table_name": "CustomOrganizationUnits",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "DocumentForNotes",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationNoteId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DocumentId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "DocumentId",
        "referenced_table_name": "Documents",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "OrganizationNoteId",
        "referenced_table_name": "OrganizationNotes",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "OrganizationId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "Documents",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "DocumentName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DocumentType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Base64",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Base64DocumentType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "SizeInBytes",
        "data_type": "float"
      },
      {
        "column_name": "DocumentUrl",
        "data_type": "nvarchar"
      },
      {
        "column_name": "StorageServer",
        "data_type": "int"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "EmailTemplates",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "TemplateName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Description",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EmailSubject",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EmailBody",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "TemplateType",
        "data_type": "int"
      },
      {
        "column_name": "CustomOrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "CustomOrganizationUnitId",
        "referenced_table_name": "CustomOrganizationUnits",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FA_Documents",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsReviewerOnly",
        "data_type": "bit"
      },
      {
        "column_name": "DateAdded",
        "data_type": "datetime2"
      },
      {
        "column_name": "DocumentId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "DocumentId",
        "referenced_table_name": "Documents",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ReviewerApplications",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AssignedDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "BlindReview",
        "data_type": "bit"
      },
      {
        "column_name": "IsStandardReview",
        "data_type": "bit"
      },
      {
        "column_name": "ReviewTypeApplication",
        "data_type": "int"
      },
      {
        "column_name": "IsQuestionSectionDone",
        "data_type": "bit"
      },
      {
        "column_name": "IsBudgetDone",
        "data_type": "bit"
      },
      {
        "column_name": "IsProjectPlanDone",
        "data_type": "bit"
      },
      {
        "column_name": "IsSubmitted",
        "data_type": "bit"
      },
      {
        "column_name": "SubmitDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ReviewRound",
        "data_type": "int"
      },
      {
        "column_name": "IsReviewEnded",
        "data_type": "bit"
      },
      {
        "column_name": "TotalReviewScore",
        "data_type": "decimal"
      },
      {
        "column_name": "PercentCompleted",
        "data_type": "decimal"
      },
      {
        "column_name": "ReviewerContactId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewerUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "FAApplication_MainId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewPanelId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "TotalBudgetScore",
        "data_type": "int"
      },
      {
        "column_name": "TotalProjectPlanScore",
        "data_type": "int"
      },
      {
        "column_name": "BudgetReviewedComment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProjectPlanReviewedComment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ReviewWorkflowStepId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewWorkflowTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "InEligibileForAward",
        "data_type": "bit"
      },
      {
        "column_name": "IsDoEligibility",
        "data_type": "bit"
      },
      {
        "column_name": "SectionTemplate",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsHideFromList",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ReviewerUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewerContactId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAApplication_MainId",
        "referenced_table_name": "FAApplication_Mains",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewPanelId",
        "referenced_table_name": "ReviewPanels",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewWorkflowStepId",
        "referenced_table_name": "ReviewWorkflowSteps",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewWorkflowTemplateId",
        "referenced_table_name": "ReviewWorkflowTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FA_FundingDetails",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "GrantType",
        "data_type": "int"
      },
      {
        "column_name": "Awards",
        "data_type": "bigint"
      },
      {
        "column_name": "FundAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "MinimumAward",
        "data_type": "decimal"
      },
      {
        "column_name": "MaximumAward",
        "data_type": "decimal"
      },
      {
        "column_name": "AllowMulipleApplications",
        "data_type": "bit"
      },
      {
        "column_name": "ApplicationSubmissionEmail_SendToApp_Type",
        "data_type": "int"
      },
      {
        "column_name": "ApplicationReturendEmail_SendToApp_Type",
        "data_type": "int"
      },
      {
        "column_name": "ApplicationNegotiationEmail_SendToApp_Type",
        "data_type": "int"
      },
      {
        "column_name": "AwardNotificationEmail_SendToApp_Type",
        "data_type": "int"
      },
      {
        "column_name": "DeclineNotificationEmail_SendToApp_Type",
        "data_type": "int"
      },
      {
        "column_name": "ProjectStartDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ProjectEndDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "TotalNumberOfFundingYears",
        "data_type": "float"
      },
      {
        "column_name": "ReferenceNumber1",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ReferenceNumber2",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CommittedAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "AwardIssueDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "FiscalOrBudgetStartDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "AwardType",
        "data_type": "int"
      },
      {
        "column_name": "PaymentMethod",
        "data_type": "int"
      },
      {
        "column_name": "PaymentRequestReport",
        "data_type": "int"
      },
      {
        "column_name": "PerformanceBasedPayments",
        "data_type": "int"
      },
      {
        "column_name": "ProjectType",
        "data_type": "int"
      },
      {
        "column_name": "ApplicationReceivedEmail_SendToIU_Users",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ReturnNegotiationReceivedEmail_SendToIU_Users",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AnnouncementOwner",
        "data_type": "bigint"
      },
      {
        "column_name": "ApplicationSubmissionEmail_SendToApp_Template",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ApplicationReceivedEmail_SendToIU_Template",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ApplicationReturnedEmail_SendToApp_Template",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ApplicationNegotiationEmail_SendToApp_Template",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReturnNegotiationReceivedEmail_SendToIU_Template",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AwardNotificationEmail_SendToApp_Template",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DeclineNotificationEmail_SendToApp_Template",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DeclineLetterTemplate_SendToApp_ALTemplate",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AwardLetterTemplate_SendToApp_ALTemplate",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "BulkAwardsType",
        "data_type": "int"
      },
      {
        "column_name": "GrantProjectManagementType",
        "data_type": "int"
      },
      {
        "column_name": "FiscaAwardYearType",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ArchiveDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ReviewCloseDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ReviewOpenDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "RequireBudgetRevisionJustification",
        "data_type": "bit"
      },
      {
        "column_name": "SingleYearBudget",
        "data_type": "bit"
      },
      {
        "column_name": "SourceAllocationByBudgetCategory",
        "data_type": "bit"
      },
      {
        "column_name": "SourceAllocationByTransaction",
        "data_type": "bit"
      },
      {
        "column_name": "SourceProjectPlanAllocation",
        "data_type": "bit"
      },
      {
        "column_name": "ApplicationAssignedtoReviewer",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AmendmentNotificationSenttoApplicant",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AmendmentNotificationSenttoApplicant_Type",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ApplicationAssignedtoReviewer",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "AnnouncementOwner",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ApplicationNegotiationEmail_SendToApp_Template",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ApplicationReceivedEmail_SendToIU_Template",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ApplicationReturnedEmail_SendToApp_Template",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ApplicationSubmissionEmail_SendToApp_Template",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "AwardNotificationEmail_SendToApp_Template",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "DeclineNotificationEmail_SendToApp_Template",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReturnNegotiationReceivedEmail_SendToIU_Template",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "AwardLetterTemplate_SendToApp_ALTemplate",
        "referenced_table_name": "LetterTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "DeclineLetterTemplate_SendToApp_ALTemplate",
        "referenced_table_name": "LetterTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FiscaAwardYearType",
        "referenced_table_name": "StringMapItems",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "AmendmentNotificationSenttoApplicant",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FA_KeyDataWithFundingCategories",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FundingCategory",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundingCategory",
        "referenced_table_name": "StringMapItems",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FA_KeyDataWithPrograms",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ProgramId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ProgramId",
        "referenced_table_name": "Programs",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FA_Narratives",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Narrative",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "BudgetInstructions",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ObjectiveInstructions",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ReviewerApplicationDocumnets",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewDocType",
        "data_type": "int"
      },
      {
        "column_name": "FAApplication_MainId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "QA_QuestionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DocumentId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewerApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "DocumentId",
        "referenced_table_name": "Documents",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAApplication_MainId",
        "referenced_table_name": "FAApplication_Mains",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "QA_QuestionId",
        "referenced_table_name": "QA_Questions",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewerApplicationId",
        "referenced_table_name": "ReviewerApplications",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FA_RevenueSourceReverts",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "RevertId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "RevertDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "RevenueSourecType",
        "data_type": "int"
      },
      {
        "column_name": "RevertAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "Memo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FA_RevenueSourceId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ProgramFundId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "RevertAllocationAmount",
        "data_type": "decimal"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FA_RevenueSourceId",
        "referenced_table_name": "FA_RevenueSources",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ProgramFundId",
        "referenced_table_name": "ProgramFunds",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FA_RevenueSources",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "StartDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "EndDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "RequiredCashMatch",
        "data_type": "decimal"
      },
      {
        "column_name": "RequiredInKindMatch",
        "data_type": "decimal"
      },
      {
        "column_name": "FundAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "RevenueSourceName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProgramFundId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AssistanceListingId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "AllocationDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "AllocationId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "RevenueSourceType",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "AssistanceListingId",
        "referenced_table_name": "AssistanceListings",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ProgramFundId",
        "referenced_table_name": "ProgramFunds",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FAApplication_Budgets",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "BudgetSubmitted",
        "data_type": "bit"
      },
      {
        "column_name": "RequestedAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "MainBudgetTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAApplication_MainId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FAApplication_MainId",
        "referenced_table_name": "FAApplication_Mains",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "MainBudgetTemplateId",
        "referenced_table_name": "MainBudgetTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FAApplication_Comments",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Comment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FAApplication_MainId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "QA_QuestionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FAApplication_MainId",
        "referenced_table_name": "FAApplication_Mains",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "QA_QuestionId",
        "referenced_table_name": "QA_Questions",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FAApplication_Documents",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AddedDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "SubQuestionAttachment",
        "data_type": "bit"
      },
      {
        "column_name": "SubQuestionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "MainQuestionAttachment",
        "data_type": "bit"
      },
      {
        "column_name": "DocumentId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAApplication_MainId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "QA_QuestionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "MainAnswer",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "DocumentId",
        "referenced_table_name": "Documents",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAApplication_MainId",
        "referenced_table_name": "FAApplication_Mains",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "QA_QuestionId",
        "referenced_table_name": "QA_Questions",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ReviewerApplicationResponses",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Score",
        "data_type": "decimal"
      },
      {
        "column_name": "Visited",
        "data_type": "bit"
      },
      {
        "column_name": "Comment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAApplication_MainId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "QA_QuestionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewerApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "IsReviewerQuestion",
        "data_type": "bit"
      },
      {
        "column_name": "ReviewerQuestionAns",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FAApplication_MainId",
        "referenced_table_name": "FAApplication_Mains",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "QA_QuestionId",
        "referenced_table_name": "QA_Questions",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewerApplicationId",
        "referenced_table_name": "ReviewerApplications",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FAApplication_Mains",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ApplicationDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "isViewOnly",
        "data_type": "bit"
      },
      {
        "column_name": "Score",
        "data_type": "decimal"
      },
      {
        "column_name": "RequestedAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "InitialRequestedAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "ConversionRate",
        "data_type": "decimal"
      },
      {
        "column_name": "ReviewDueDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "AwardDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "AwardAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "Awarded",
        "data_type": "decimal"
      },
      {
        "column_name": "SubmitDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "Comment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ApplicationNumber",
        "data_type": "int"
      },
      {
        "column_name": "ProjectName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProjectSummary",
        "data_type": "nvarchar"
      },
      {
        "column_name": "BudgetReturned",
        "data_type": "bit"
      },
      {
        "column_name": "ObjectiveReturned",
        "data_type": "bit"
      },
      {
        "column_name": "ApplicationUniqueId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ReviewDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "PercentCompleted",
        "data_type": "decimal"
      },
      {
        "column_name": "IsBudgetCompleted",
        "data_type": "bit"
      },
      {
        "column_name": "IsObjectiveCompleted",
        "data_type": "bit"
      },
      {
        "column_name": "IsBudgetReset",
        "data_type": "bit"
      },
      {
        "column_name": "IsObjectiveReset",
        "data_type": "bit"
      },
      {
        "column_name": "ReviewDeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "AuthorizedOfficialId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ProjectDirectorId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ProjectCoordinatorId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FiscalOfficerId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ApplicantOrganizationGuId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "SubmittedContactGuId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOAnnouncementId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewDeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "SubmittedBy",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "FAApplication_Status",
        "data_type": "int"
      },
      {
        "column_name": "MainApplicantContactGuId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AllowedFASubmissionDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastSubmitedDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "SendForResubmission",
        "data_type": "bit"
      },
      {
        "column_name": "ReviewWorkflowStepId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewWorkflowTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "BudgetScore",
        "data_type": "decimal"
      },
      {
        "column_name": "InEligibileForAward",
        "data_type": "bit"
      },
      {
        "column_name": "ProjectPlanScore",
        "data_type": "decimal"
      },
      {
        "column_name": "QuestionsScore",
        "data_type": "decimal"
      },
      {
        "column_name": "TotalScore",
        "data_type": "decimal"
      },
      {
        "column_name": "ReviewRound",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ReviewDeleterUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "SubmittedBy",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "AuthorizedOfficialId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FiscalOfficerId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "MainApplicantContactGuId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ProjectCoordinatorId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ProjectDirectorId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "SubmittedContactGuId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOAnnouncementId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ApplicantOrganizationGuId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewWorkflowStepId",
        "referenced_table_name": "ReviewWorkflowSteps",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewWorkflowTemplateId",
        "referenced_table_name": "ReviewWorkflowTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FAApplication_Responses",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Response",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Response_JSON",
        "data_type": "nvarchar"
      },
      {
        "column_name": "JSON_Type_Question",
        "data_type": "bit"
      },
      {
        "column_name": "IsQuestionReset",
        "data_type": "bit"
      },
      {
        "column_name": "Comment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsNotApplicable",
        "data_type": "bit"
      },
      {
        "column_name": "QuestionType",
        "data_type": "int"
      },
      {
        "column_name": "AllDocumentIds",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ObtainedScoreByAns",
        "data_type": "decimal"
      },
      {
        "column_name": "FAApplication_MainId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "QA_QuestionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "SelectedContactId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "SelectedContactId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAApplication_MainId",
        "referenced_table_name": "FAApplication_Mains",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "QA_QuestionId",
        "referenced_table_name": "QA_Questions",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "__EFMigrationsHistory",
    "columns": [
      {
        "column_name": "MigrationId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProductVersion",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "FAClosureNotifications",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DaysPriorToClose1",
        "data_type": "float"
      },
      {
        "column_name": "SendToAllApplicantUsers",
        "data_type": "bit"
      },
      {
        "column_name": "SendToApplicantsInDraft",
        "data_type": "bit"
      },
      {
        "column_name": "DaysPriorToClose2",
        "data_type": "float"
      },
      {
        "column_name": "DaysPriorToClose3",
        "data_type": "float"
      },
      {
        "column_name": "DaysPriorToClose4",
        "data_type": "float"
      },
      {
        "column_name": "IsDaysPriorToClose1",
        "data_type": "bit"
      },
      {
        "column_name": "IsDaysPriorToClose2",
        "data_type": "bit"
      },
      {
        "column_name": "IsDaysPriorToClose3",
        "data_type": "bit"
      },
      {
        "column_name": "IsDaysPriorToClose4",
        "data_type": "bit"
      },
      {
        "column_name": "IsSend_DaysPriorToClose1",
        "data_type": "bit"
      },
      {
        "column_name": "IsSend_DaysPriorToClose2",
        "data_type": "bit"
      },
      {
        "column_name": "IsSend_DaysPriorToClose3",
        "data_type": "bit"
      },
      {
        "column_name": "IsSend_DaysPriorToClose4",
        "data_type": "bit"
      },
      {
        "column_name": "EmailTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "EmailTemplateId",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpAuditLogs",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "BrowserInfo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClientIpAddress",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClientName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CustomData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Exception",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ExecutionDuration",
        "data_type": "int"
      },
      {
        "column_name": "ExecutionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "ImpersonatorTenantId",
        "data_type": "int"
      },
      {
        "column_name": "ImpersonatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "MethodName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Parameters",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ServiceName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "ReturnValue",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ExceptionMessage",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "FAKeyFundingDatas",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FundingAnnouncementTitle",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FundingAnnouncementNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "OpenDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "CloseDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "Status",
        "data_type": "int"
      },
      {
        "column_name": "IsDisplayFundOnFA",
        "data_type": "bit"
      },
      {
        "column_name": "IsSavedAsTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "AnnouncementType",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AwardCategory",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AnnouncementAwardType",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "BusinessUnit",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "AllowBudget",
        "data_type": "bit"
      },
      {
        "column_name": "AllowObjective",
        "data_type": "bit"
      },
      {
        "column_name": "AllowWorkflow",
        "data_type": "bit"
      },
      {
        "column_name": "IsAutoPublishPending",
        "data_type": "bit"
      },
      {
        "column_name": "IsFinalizeFA",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "BusinessUnit",
        "referenced_table_name": "CustomOrganizationUnits",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "AnnouncementAwardType",
        "referenced_table_name": "StringMapItems",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "AnnouncementType",
        "referenced_table_name": "StringMapItems",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "AwardCategory",
        "referenced_table_name": "StringMapItems",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpBackgroundJobs",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsAbandoned",
        "data_type": "bit"
      },
      {
        "column_name": "JobArgs",
        "data_type": "nvarchar"
      },
      {
        "column_name": "JobType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "LastTryTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "NextTryTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "Priority",
        "data_type": "tinyint"
      },
      {
        "column_name": "TryCount",
        "data_type": "smallint"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "FavouriteAnnouncements",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsFavourite",
        "data_type": "bit"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserContactId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "PrimaryContactId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "PrimaryContactId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "UserContactId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "OrganizationId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpDynamicEntityProperties",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "int"
      },
      {
        "column_name": "EntityFullName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DynamicPropertyId",
        "data_type": "int"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "DynamicPropertyId",
        "referenced_table_name": "AbpDynamicProperties",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "Funds",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FundStartDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "FundEndDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "TotalFundAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "FunderName",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "FundName",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FunderName",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpDynamicEntityPropertyValues",
    "columns": [
      {
        "column_name": "Value",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DynamicEntityPropertyId",
        "data_type": "int"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "Id",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "DynamicEntityPropertyId",
        "referenced_table_name": "AbpDynamicEntityProperties",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "LetterTemplates",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "TemplateName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "LetterBody",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "TemplateType",
        "data_type": "int"
      },
      {
        "column_name": "CustomOrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "CustomOrganizationUnitId",
        "referenced_table_name": "CustomOrganizationUnits",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpDynamicProperties",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "int"
      },
      {
        "column_name": "PropertyName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "InputType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Permission",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "DisplayName",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "MainBudgetTemplates",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "MainJsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsSaveAsTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "Year",
        "data_type": "int"
      },
      {
        "column_name": "AllowApplicantSubOperation",
        "data_type": "bit"
      },
      {
        "column_name": "AllowFASubOperation",
        "data_type": "bit"
      },
      {
        "column_name": "AllowFAParentOperation",
        "data_type": "bit"
      },
      {
        "column_name": "AllowApplicantParentOperation",
        "data_type": "bit"
      },
      {
        "column_name": "AllowBudgetCalculation",
        "data_type": "bit"
      },
      {
        "column_name": "AllowBudgetNarrative",
        "data_type": "bit"
      },
      {
        "column_name": "MaximumBudgetScore",
        "data_type": "int"
      },
      {
        "column_name": "AllowRegularBudget",
        "data_type": "bit"
      },
      {
        "column_name": "IsTemplateForFA",
        "data_type": "bit"
      },
      {
        "column_name": "NarrativeJsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "NarrativeSetupJsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "ParentBudgetTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "LinkedBudgetTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "BudgetCalculationsConfiguration",
        "data_type": "int"
      },
      {
        "column_name": "BudgetNarrativeConfiguration",
        "data_type": "int"
      },
      {
        "column_name": "MaximumAllowedAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "AllowBudgetScore",
        "data_type": "bit"
      },
      {
        "column_name": "AllowMaxRequestedAmount",
        "data_type": "bit"
      },
      {
        "column_name": "AllowMaximumAmountByParentBudgetCategory",
        "data_type": "bit"
      },
      {
        "column_name": "AllowRequestedAmountDerive",
        "data_type": "bit"
      },
      {
        "column_name": "MaximumRequestedAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "RequestedAmountDerive",
        "data_type": "int"
      },
      {
        "column_name": "SetMaxBudgetValue",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "LinkedBudgetTemplateId",
        "referenced_table_name": "MainBudgetTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ParentBudgetTemplateId",
        "referenced_table_name": "MainBudgetTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpDynamicPropertyValues",
    "columns": [
      {
        "column_name": "Value",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "DynamicPropertyId",
        "data_type": "int"
      },
      {
        "column_name": "Id",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "DynamicPropertyId",
        "referenced_table_name": "AbpDynamicProperties",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "MainProjectPlanTemplates",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "MainJsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsSaveAsTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "IsTemplateForFA",
        "data_type": "bit"
      },
      {
        "column_name": "IsTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "MaximumProjectPlanScore",
        "data_type": "int"
      },
      {
        "column_name": "AllowMaximumProjectPlanScore",
        "data_type": "bit"
      },
      {
        "column_name": "AllowFAOperation_Goals",
        "data_type": "bit"
      },
      {
        "column_name": "AllowFAOperation_Objectives",
        "data_type": "bit"
      },
      {
        "column_name": "AllowFAOperation_PerformanceMeasures",
        "data_type": "bit"
      },
      {
        "column_name": "AllowFAOperation_Activities",
        "data_type": "bit"
      },
      {
        "column_name": "AllowApplicantOperation_Goals",
        "data_type": "bit"
      },
      {
        "column_name": "AllowApplicantOperation_Objectives",
        "data_type": "bit"
      },
      {
        "column_name": "AllowApplicantOperation_PerformanceMeasures",
        "data_type": "bit"
      },
      {
        "column_name": "AllowApplicantOperation_Activities",
        "data_type": "bit"
      },
      {
        "column_name": "ProjectPlanTemplateTypes",
        "data_type": "int"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "LinkedObjectiveTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ParentObjectiveTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "LinkedObjectiveTemplateId",
        "referenced_table_name": "MainProjectPlanTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ParentObjectiveTemplateId",
        "referenced_table_name": "MainProjectPlanTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpEditions",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "int"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "DisplayName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Discriminator",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AnnualPrice",
        "data_type": "decimal"
      },
      {
        "column_name": "ExpiringEditionId",
        "data_type": "int"
      },
      {
        "column_name": "MonthlyPrice",
        "data_type": "decimal"
      },
      {
        "column_name": "TrialDayCount",
        "data_type": "int"
      },
      {
        "column_name": "WaitingDayAfterExpire",
        "data_type": "int"
      },
      {
        "column_name": "DailyPrice",
        "data_type": "decimal"
      },
      {
        "column_name": "WeeklyPrice",
        "data_type": "decimal"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "OrganizationDocuments",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsConfidential",
        "data_type": "bit"
      },
      {
        "column_name": "DateAdded",
        "data_type": "datetime2"
      },
      {
        "column_name": "OrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DocumentId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "Active",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "OrganizationId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "DocumentId",
        "referenced_table_name": "Documents",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpEntityChanges",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "ChangeTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "ChangeType",
        "data_type": "tinyint"
      },
      {
        "column_name": "EntityChangeSetId",
        "data_type": "bigint"
      },
      {
        "column_name": "EntityId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityTypeFullName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "EntityChangeSetId",
        "referenced_table_name": "AbpEntityChangeSets",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ReviewerBudgetCommentses",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "BudgetCategoryId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "BudgetComment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ReviewerApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FAApplication_MainId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ContactId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ContactId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAApplication_MainId",
        "referenced_table_name": "FAApplication_Mains",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewerApplicationId",
        "referenced_table_name": "ReviewerApplications",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "OrganizationNotes",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Note",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DateAdded",
        "data_type": "datetime2"
      },
      {
        "column_name": "OrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "NoteType",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "OrganizationId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpEntityChangeSets",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "BrowserInfo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClientIpAddress",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClientName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "ExtensionData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ImpersonatorTenantId",
        "data_type": "int"
      },
      {
        "column_name": "ImpersonatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Reason",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "Organizations",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EIN",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DUNSNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "WebsiteURL",
        "data_type": "nvarchar"
      },
      {
        "column_name": "MainPhone",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FaxNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "OrganizationID",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "Email",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DAINNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "UEI",
        "data_type": "nvarchar"
      },
      {
        "column_name": "OrganizationType",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "ParentOrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "IsFunder",
        "data_type": "bit"
      },
      {
        "column_name": "MailingAddressId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "PhysicalAddressId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsSameAsMailingAddress",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "OrganizationUnitId",
        "referenced_table_name": "AbpOrganizationUnits",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "MailingAddressId",
        "referenced_table_name": "Addresses",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "PhysicalAddressId",
        "referenced_table_name": "Addresses",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ParentOrganizationId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "OrganizationType",
        "referenced_table_name": "StringMapItems",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpEntityPropertyChanges",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "EntityChangeId",
        "data_type": "bigint"
      },
      {
        "column_name": "NewValue",
        "data_type": "nvarchar"
      },
      {
        "column_name": "OriginalValue",
        "data_type": "nvarchar"
      },
      {
        "column_name": "PropertyName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "PropertyTypeFullName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "NewValueHash",
        "data_type": "nvarchar"
      },
      {
        "column_name": "OriginalValueHash",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "EntityChangeId",
        "referenced_table_name": "AbpEntityChanges",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ProgramFunds",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ProgramFund_StartDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ProgramFund_EndDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ProgramFund_Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProgramFund_Amount",
        "data_type": "decimal"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "ProgramId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CustomOrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "Awards_AppropriationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AssistanceListingId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "AssistanceListingId",
        "referenced_table_name": "AssistanceListings",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "Awards_AppropriationId",
        "referenced_table_name": "Awards_Appropriations",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "CustomOrganizationUnitId",
        "referenced_table_name": "CustomOrganizationUnits",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ProgramId",
        "referenced_table_name": "Programs",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpFeatures",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Discriminator",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Value",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EditionId",
        "data_type": "int"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "EditionId",
        "referenced_table_name": "AbpEditions",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "OpenIddictApplications",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ClientId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClientSecret",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ConsentType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DisplayName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DisplayNames",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Permissions",
        "data_type": "nvarchar"
      },
      {
        "column_name": "PostLogoutRedirectUris",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Properties",
        "data_type": "nvarchar"
      },
      {
        "column_name": "RedirectUris",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Requirements",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Type",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClientUri",
        "data_type": "nvarchar"
      },
      {
        "column_name": "LogoUri",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "FA_Amendments",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "NeedWorkflow",
        "data_type": "bit"
      },
      {
        "column_name": "ShowAmendmentSummary",
        "data_type": "bit"
      },
      {
        "column_name": "AmendmentName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ChangeKeyFundingData",
        "data_type": "bit"
      },
      {
        "column_name": "ChangeFundingAnnouncementTitle",
        "data_type": "bit"
      },
      {
        "column_name": "ChangeFundingAnnouncementNumber",
        "data_type": "bit"
      },
      {
        "column_name": "ChangeAnnouncementType",
        "data_type": "bit"
      },
      {
        "column_name": "ChangeProgram",
        "data_type": "bit"
      },
      {
        "column_name": "ChangeAnnouncementOpenDate",
        "data_type": "bit"
      },
      {
        "column_name": "ChangeAnnouncementCloseDate",
        "data_type": "bit"
      },
      {
        "column_name": "KeyFundingDataSummary",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ChangeAllocations",
        "data_type": "bit"
      },
      {
        "column_name": "AllocationsSummary",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ChangeAnnouncementDetails",
        "data_type": "bit"
      },
      {
        "column_name": "ChangeAllowMultipleApplications",
        "data_type": "bit"
      },
      {
        "column_name": "AnnouncementDetailsSummary",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ChangeBudgetTemplates",
        "data_type": "bit"
      },
      {
        "column_name": "ChangeApplicantBudgetTemplates",
        "data_type": "bit"
      },
      {
        "column_name": "BudgetTemplatesSummary",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ChangeProjectPlanTemplates",
        "data_type": "bit"
      },
      {
        "column_name": "ChangeApplicantProjectPlanTemplates",
        "data_type": "bit"
      },
      {
        "column_name": "ProjectPlanTemplatesSummary",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ChangeApplicantQuestions",
        "data_type": "bit"
      },
      {
        "column_name": "ApplicantQuestionsSummary",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ApplicantQuestionsJson",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ChangeReviewerQuestions",
        "data_type": "bit"
      },
      {
        "column_name": "ReviewerQuestionsSummary",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ReviewerQuestionsJson",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ChangeAnnouncementNarrative",
        "data_type": "bit"
      },
      {
        "column_name": "AnnouncementNarrativeSummary",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ChangeAttachments",
        "data_type": "bit"
      },
      {
        "column_name": "AttachmentsSummary",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ContactId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "Status",
        "data_type": "int"
      },
      {
        "column_name": "Amendment_Key",
        "data_type": "nvarchar"
      },
      {
        "column_name": "RePublishDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "RePublishUserId",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ContactId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "RePublishUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "Programs",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ProgramName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProgramStartDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ProgramEndDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "FundAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "ProgramCode",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "BusinessUnit",
        "data_type": "bigint"
      },
      {
        "column_name": "ParentProgram",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "BusinessUnit",
        "referenced_table_name": "CustomOrganizationUnits",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ParentProgram",
        "referenced_table_name": "Programs",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ProgramCode",
        "referenced_table_name": "StringMapItems",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpLanguages",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "int"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "DisplayName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Icon",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "IsDisabled",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "OpenIddictScopes",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Description",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Descriptions",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DisplayName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DisplayNames",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Properties",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Resources",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "QA_Questions",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "QuestionLabel",
        "data_type": "nvarchar"
      },
      {
        "column_name": "QuestionType",
        "data_type": "int"
      },
      {
        "column_name": "Order",
        "data_type": "int"
      },
      {
        "column_name": "Description",
        "data_type": "nvarchar"
      },
      {
        "column_name": "QuestionFor",
        "data_type": "int"
      },
      {
        "column_name": "IsCommentVisible",
        "data_type": "bit"
      },
      {
        "column_name": "IncludeReviewerQuestions",
        "data_type": "bit"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "IsNotApplicable",
        "data_type": "bit"
      },
      {
        "column_name": "PorfolioReportTracking",
        "data_type": "bit"
      },
      {
        "column_name": "CharacterLimit",
        "data_type": "int"
      },
      {
        "column_name": "QuestionJSON",
        "data_type": "nvarchar"
      },
      {
        "column_name": "MaxRowLimit",
        "data_type": "int"
      },
      {
        "column_name": "EnabledCommentsOrNarrative",
        "data_type": "int"
      },
      {
        "column_name": "NarrativeCharacterLimit",
        "data_type": "int"
      },
      {
        "column_name": "SectionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Sub_SectionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ParentQuestionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "MaximumPotentialScore",
        "data_type": "int"
      },
      {
        "column_name": "QuestionInstruction",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AllowAttachmentofDocument",
        "data_type": "bit"
      },
      {
        "column_name": "ManualScoreEntry",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ParentQuestionId",
        "referenced_table_name": "QA_Questions",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "SectionId",
        "referenced_table_name": "Question_Sections",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "Sub_SectionId",
        "referenced_table_name": "Question_Sub_Sections",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpLanguageTexts",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Key",
        "data_type": "nvarchar"
      },
      {
        "column_name": "LanguageName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Source",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "Value",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "OpenIddictAuthorizations",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "Properties",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Scopes",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Status",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Subject",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Type",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ApplicationId",
        "referenced_table_name": "OpenIddictApplications",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "Question_Sections",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "SectionName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Points",
        "data_type": "decimal"
      },
      {
        "column_name": "MarkSectionAsConfidential",
        "data_type": "bit"
      },
      {
        "column_name": "Order",
        "data_type": "int"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpNotifications",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Data",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DataTypeName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityTypeAssemblyQualifiedName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityTypeName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ExcludedUserIds",
        "data_type": "nvarchar"
      },
      {
        "column_name": "NotificationName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Severity",
        "data_type": "tinyint"
      },
      {
        "column_name": "TenantIds",
        "data_type": "nvarchar"
      },
      {
        "column_name": "UserIds",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TargetNotifiers",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "Question_Sub_Sections",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Sub_Section_Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Order",
        "data_type": "int"
      },
      {
        "column_name": "Question_SectionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "EmptySub_Section",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "Question_SectionId",
        "referenced_table_name": "Question_Sections",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpNotificationSubscriptions",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "EntityId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityTypeAssemblyQualifiedName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityTypeName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "NotificationName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TargetNotifiers",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "OpenIddictTokens",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AuthorizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ExpirationDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "Payload",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Properties",
        "data_type": "nvarchar"
      },
      {
        "column_name": "RedemptionDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ReferenceId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Status",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Subject",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Type",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ApplicationId",
        "referenced_table_name": "OpenIddictApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "AuthorizationId",
        "referenced_table_name": "OpenIddictAuthorizations",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ReviewDocuments",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DateAdded",
        "data_type": "datetime2"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DocumentId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "DocumentId",
        "referenced_table_name": "Documents",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpOrganizationUnitRoles",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "RoleId",
        "data_type": "int"
      },
      {
        "column_name": "OrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "ReviewPanelMembers",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "ReviewPanelId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "ContactId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewerType",
        "data_type": "int"
      },
      {
        "column_name": "IsDoEligibility",
        "data_type": "bit"
      },
      {
        "column_name": "IsDoRedact",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ContactId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewPanelId",
        "referenced_table_name": "ReviewPanels",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpOrganizationUnits",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "Code",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "DisplayName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "ParentId",
        "data_type": "bigint"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ParentId",
        "referenced_table_name": "AbpOrganizationUnits",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ReviewPanels",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewPanelName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "PanelChairId",
        "data_type": "bigint"
      },
      {
        "column_name": "PanelFacilitatorId",
        "data_type": "bigint"
      },
      {
        "column_name": "CustomOrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "TemplateType",
        "data_type": "int"
      },
      {
        "column_name": "IsForWorkflow",
        "data_type": "bit"
      },
      {
        "column_name": "IsRedact",
        "data_type": "bit"
      },
      {
        "column_name": "IsTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "SectionType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ReviewWorkflowStepId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewWorkflowTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AddedDocumentIds",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "PanelChairId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "PanelFacilitatorId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "CustomOrganizationUnitId",
        "referenced_table_name": "CustomOrganizationUnits",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewWorkflowStepId",
        "referenced_table_name": "ReviewWorkflowSteps",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewWorkflowTemplateId",
        "referenced_table_name": "ReviewWorkflowTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpPermissions",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Discriminator",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsGranted",
        "data_type": "bit"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "RoleId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "RoleId",
        "referenced_table_name": "AbpRoles",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "SignupFormSetups",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Field",
        "data_type": "nvarchar"
      },
      {
        "column_name": "KeyName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TableName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Required",
        "data_type": "bit"
      },
      {
        "column_name": "IsVisible",
        "data_type": "bit"
      },
      {
        "column_name": "Type",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Order",
        "data_type": "float"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "StringMapItems",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Label",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Order",
        "data_type": "int"
      },
      {
        "column_name": "IsDefault",
        "data_type": "bit"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "StringMapId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "StringMapId",
        "referenced_table_name": "StringMaps",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpRoleClaims",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "ClaimType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClaimValue",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "RoleId",
        "data_type": "int"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "RoleId",
        "referenced_table_name": "AbpRoles",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "StringMaps",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "StringMapKey",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsParentAllowed",
        "data_type": "bit"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "IsNotVisible",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "AbpRoles",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "int"
      },
      {
        "column_name": "ConcurrencyStamp",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "DisplayName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsDefault",
        "data_type": "bit"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "IsStatic",
        "data_type": "bit"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "NormalizedName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "IsBusinessUnit",
        "data_type": "bit"
      },
      {
        "column_name": "DefaultOrder",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "CreatorUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "DeleterUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "LastModifierUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "TemplateTypes",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UIPropertyName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DBPropertyName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "PropertyTemplateType",
        "data_type": "int"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "AbpSettings",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Value",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "WorkFlowDocuments",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "WorkFlowUserId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DocumentId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "DateAdded",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "DocumentId",
        "referenced_table_name": "Documents",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "WorkFlowUserId",
        "referenced_table_name": "WorkFlowUsers",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpTenantNotifications",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Data",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DataTypeName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityTypeAssemblyQualifiedName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityTypeName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "NotificationName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Severity",
        "data_type": "tinyint"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "WorkFlowitems",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "Type",
        "data_type": "int"
      },
      {
        "column_name": "WorkFlowId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "Order",
        "data_type": "int"
      },
      {
        "column_name": "IsDone",
        "data_type": "bit"
      },
      {
        "column_name": "IsProcessing",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "WorkFlowId",
        "referenced_table_name": "WorkFlows",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpTenants",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "int"
      },
      {
        "column_name": "ConnectionString",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "CustomCssId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "EditionId",
        "data_type": "int"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LightLogoFileType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "LightLogoId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenancyName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsInTrialPeriod",
        "data_type": "bit"
      },
      {
        "column_name": "SubscriptionEndDateUtc",
        "data_type": "datetime2"
      },
      {
        "column_name": "SubscriptionPaymentType",
        "data_type": "int"
      },
      {
        "column_name": "DarkLogoFileType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DarkLogoId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DarkLogoMinimalFileType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DarkLogoMinimalId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "LightLogoMinimalFileType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "LightLogoMinimalId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "EditionId",
        "referenced_table_name": "AbpEditions",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "CreatorUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "DeleterUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "LastModifierUserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "WorkFlows",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "IsTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "CustomOrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ParentWorkFlowId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "CustomOrganizationUnitId",
        "referenced_table_name": "CustomOrganizationUnits",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FAKeyFundingDataId",
        "referenced_table_name": "FAKeyFundingDatas",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ParentWorkFlowId",
        "referenced_table_name": "WorkFlows",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpUserAccounts",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "EmailAddress",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "UserLinkId",
        "data_type": "bigint"
      },
      {
        "column_name": "UserName",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "WorkFlowUsers",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Note",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Status",
        "data_type": "int"
      },
      {
        "column_name": "WorkFlowitemId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "IsDone",
        "data_type": "bit"
      },
      {
        "column_name": "IsActiveAuditProcess",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "WorkFlowitemId",
        "referenced_table_name": "WorkFlowitems",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpUserClaims",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "ClaimType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClaimValue",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "CreatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpUserLoginAttempts",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "BrowserInfo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClientIpAddress",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClientName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "Result",
        "data_type": "tinyint"
      },
      {
        "column_name": "TenancyName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "UserNameOrEmailAddress",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "AbpUserLogins",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "LoginProvider",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProviderKey",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpUserNotifications",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "State",
        "data_type": "int"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "TenantNotificationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TargetNotifiers",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  }
];