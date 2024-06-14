var FunderPortalData = [
  {
    "table_name": "ProjectCloseOutTemplates",
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
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CloseOutProfileInstruction",
        "data_type": "nvarchar"
      },
      {
        "column_name": "JsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "IsTemplate",
        "data_type": "bit"
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
        "column_name": "TenantId",
        "data_type": "int"
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
        "column_name": "POBoxNum",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsPreferred",
        "data_type": "bit"
      },
      {
        "column_name": "CountryId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AddressTypes",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "CountryId",
        "referenced_table_name": "Countries",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "RevertFundDetails",
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
        "column_name": "RevertDate",
        "data_type": "datetime2"
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
        "column_name": "RevertFundNo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOAwardId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FundingOpportunityRevenueSourcesId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOAwardId",
        "referenced_table_name": "FOAwards",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundingOpportunityRevenueSourcesId",
        "referenced_table_name": "FundingOpportunityRevenueSourceses",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AnnouncementTempletes",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "JsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "ReviewerFOApplications",
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
        "column_name": "ReviewerPanelId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewProcessId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsCompleated",
        "data_type": "bit"
      },
      {
        "column_name": "ReviewRoundId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "RoundNumber",
        "data_type": "int"
      },
      {
        "column_name": "IsPanelChiairOrPanelFacilator",
        "data_type": "bit"
      },
      {
        "column_name": "IsReviewDone",
        "data_type": "bit"
      },
      {
        "column_name": "BlindReview",
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
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewerPanelId",
        "referenced_table_name": "ReviewerPanels",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewProcessId",
        "referenced_table_name": "ReviewProcesses",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewRoundId",
        "referenced_table_name": "ReviewRounds",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AppAssesmentResponseAttachs",
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
        "column_name": "AttachmentName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FileURL",
        "data_type": "nvarchar"
      },
      {
        "column_name": "HaveToMoveInPostAward",
        "data_type": "bit"
      },
      {
        "column_name": "ApplicationAssessmentResponseId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ApplicationAssessmentResponseId",
        "referenced_table_name": "ApplicationAssessmentResponses",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ReviewerPanelMembers",
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
        "column_name": "ReviewerPanelId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
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
      },
      {
        "column_name": "ReviewerPanelId",
        "referenced_table_name": "ReviewerPanels",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AppBinaryObjects",
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
        "column_name": "Bytes",
        "data_type": "varbinary"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "ReviewerPanels",
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
      }
    ]
  },
  {
    "table_name": "AppChatMessages",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "bigint"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "TargetUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TargetTenantId",
        "data_type": "int"
      },
      {
        "column_name": "Message",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "Side",
        "data_type": "int"
      },
      {
        "column_name": "ReadState",
        "data_type": "int"
      },
      {
        "column_name": "ReceiverReadState",
        "data_type": "int"
      },
      {
        "column_name": "SharedMessageId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "ReviewerResponses",
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
        "column_name": "Response",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FOFormFieldId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewerFOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationUnitId",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ReviewerFOApplicationId",
        "referenced_table_name": "ReviewerFOApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOFormFieldId",
        "referenced_table_name": "FOFormFields",
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
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "FriendUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "FriendTenantId",
        "data_type": "int"
      },
      {
        "column_name": "FriendUserName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FriendTenancyName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FriendProfilePictureId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "State",
        "data_type": "int"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "ReviewerScores",
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
        "column_name": "Score",
        "data_type": "float"
      },
      {
        "column_name": "ReviewerComment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FOFormFieldId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewerFOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationUnitId",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOFormFieldId",
        "referenced_table_name": "FOFormFields",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewerFOApplicationId",
        "referenced_table_name": "ReviewerFOApplications",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AppInvoices",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "int"
      },
      {
        "column_name": "InvoiceNo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "InvoiceDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "TenantLegalName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantAddress",
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
    "table_name": "ReviewProcesses",
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
        "column_name": "ProcessName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "ApplicantBudgetDetails",
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
        "column_name": "JsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "BudgetTemplateDetailId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ApplicationAssessmentResponseId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ApplicationAssessmentResponseId",
        "referenced_table_name": "ApplicationAssessmentResponses",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "BudgetTemplateDetailId",
        "referenced_table_name": "BudgetTemplateDetails",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ReviewRounds",
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
        "column_name": "ReviewRoundName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ReviewProcessId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "StepNumber",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ReviewProcessId",
        "referenced_table_name": "ReviewProcesses",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ApplicantBudgets",
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
        "column_name": "JsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProjectType",
        "data_type": "int"
      },
      {
        "column_name": "Year",
        "data_type": "int"
      },
      {
        "column_name": "SubProjectName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FOAssessmentSessionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "BudgetNarrative",
        "data_type": "nvarchar"
      },
      {
        "column_name": "BudgetProperties",
        "data_type": "nvarchar"
      },
      {
        "column_name": "BudgetReviewerComment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "OldBudgetNarrative",
        "data_type": "nvarchar"
      },
      {
        "column_name": "OldJsonData",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOAssessmentSessionId",
        "referenced_table_name": "FOAssessmentSessions",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "_TransactionIndex_81682f0a-cca9-4d83-99af-a1a6f04fd993",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "RoundDetails",
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
        "column_name": "ReviewRoundId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "ReviewerPanelId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewerPanelId",
        "referenced_table_name": "ReviewerPanels",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewRoundId",
        "referenced_table_name": "ReviewRounds",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ApplicantNegotiations",
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
        "column_name": "BudgetReturned",
        "data_type": "bit"
      },
      {
        "column_name": "BudgetReturnedDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ObjectiveReturned",
        "data_type": "bit"
      },
      {
        "column_name": "ObjectiveReturnedDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "BudgetResubmited",
        "data_type": "bit"
      },
      {
        "column_name": "BudgetResubmitedDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ObjectiveResubmited",
        "data_type": "bit"
      },
      {
        "column_name": "ObjectiveResubmitedDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "BudgetReturnNote",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ObjectiveReturnNote",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "StringMapDetails",
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
        "column_name": "Label",
        "data_type": "nvarchar"
      },
      {
        "column_name": "isDefault",
        "data_type": "bit"
      },
      {
        "column_name": "OrderBy",
        "data_type": "int"
      },
      {
        "column_name": "StringMapTypeId",
        "data_type": "int"
      },
      {
        "column_name": "Suffiex",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "StringMapTypeId",
        "referenced_table_name": "StringMapTypes",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ApplicationAssessmentResponses",
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
        "column_name": "FOFormFieldResponseText",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FieldType",
        "data_type": "int"
      },
      {
        "column_name": "ObtainedScore",
        "data_type": "decimal"
      },
      {
        "column_name": "FOFormFieldWeightage",
        "data_type": "decimal"
      },
      {
        "column_name": "ResponseWeightage",
        "data_type": "decimal"
      },
      {
        "column_name": "IsSystemScorable",
        "data_type": "bit"
      },
      {
        "column_name": "Comment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AdminComment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsParent",
        "data_type": "bit"
      },
      {
        "column_name": "IsCreatedByReviewer",
        "data_type": "bit"
      },
      {
        "column_name": "FOAssessmentSessionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOFormFieldId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOFormFieldReponseId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOFormSectionContentId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ParentAssessmentResponseId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "ContactId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsNotApplicableSelect",
        "data_type": "bit"
      },
      {
        "column_name": "CharacterCount",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ParentAssessmentResponseId",
        "referenced_table_name": "ApplicationAssessmentResponses",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ContactId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOAssessmentSessionId",
        "referenced_table_name": "FOAssessmentSessions",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOFormFieldReponseId",
        "referenced_table_name": "FOFormFieldReponses",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOFormFieldId",
        "referenced_table_name": "FOFormFields",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOFormSectionContentId",
        "referenced_table_name": "FOFormSectionContents",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "StringMapTypes",
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
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TypeKey",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "ApplicationNotes",
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
        "column_name": "Type",
        "data_type": "int"
      },
      {
        "column_name": "Note",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewerFOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "BudgetYear",
        "data_type": "bigint"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewerFOApplicationId",
        "referenced_table_name": "ReviewerFOApplications",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "SubAwards",
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
        "column_name": "SubAwardName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "BudgetTemplateId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "BudgetTemplateId",
        "referenced_table_name": "BudgetTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "ApplicationReviewDetails",
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
        "column_name": "ReviewDueDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "RoundNumber",
        "data_type": "int"
      },
      {
        "column_name": "ReviewRoundId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewProcessId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewerPanelId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewerId",
        "data_type": "bigint"
      },
      {
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ReviewerId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewerPanelId",
        "referenced_table_name": "ReviewerPanels",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewProcessId",
        "referenced_table_name": "ReviewProcesses",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewRoundId",
        "referenced_table_name": "ReviewRounds",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "UserAnnouncementWishLists",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "FOAnnouncementId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "IsActive",
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
        "column_name": "FOAnnouncementId",
        "referenced_table_name": "FOAnnouncements",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AppSubscriptionPayments",
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
        "column_name": "Description",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Gateway",
        "data_type": "int"
      },
      {
        "column_name": "Amount",
        "data_type": "decimal"
      },
      {
        "column_name": "Status",
        "data_type": "int"
      },
      {
        "column_name": "EditionId",
        "data_type": "int"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "DayCount",
        "data_type": "int"
      },
      {
        "column_name": "PaymentPeriodType",
        "data_type": "int"
      },
      {
        "column_name": "ExternalPaymentId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "InvoiceNo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsRecurring",
        "data_type": "bit"
      },
      {
        "column_name": "SuccessUrl",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ErrorUrl",
        "data_type": "nvarchar"
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
    "table_name": "WorkFlowActions",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "Action",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "Assessments",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "AssessmentCategory",
        "data_type": "int"
      },
      {
        "column_name": "AssessmentName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AssessmentNameEnglish",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AssesmentInstruction",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AssesmentInstructionEnglish",
        "data_type": "nvarchar"
      },
      {
        "column_name": "SequenceNum",
        "data_type": "int"
      },
      {
        "column_name": "ReviewerAssessmentStartDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ReviewerAssessmentEndDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "AssessmentDescription",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AssessmentEligibilityCriteria",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AnnoucementStatus",
        "data_type": "int"
      },
      {
        "column_name": "FOAnnouncementId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "AssessmentType",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOAnnouncementId",
        "referenced_table_name": "FOAnnouncements",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "WorkFlowAuditHistories",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "IsRejected",
        "data_type": "bit"
      },
      {
        "column_name": "IsApproved",
        "data_type": "bit"
      },
      {
        "column_name": "IsSubmitted",
        "data_type": "bit"
      },
      {
        "column_name": "ActionMessage",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FundingOpportunityId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ContactId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "WorkFlowItemId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ContactId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundingOpportunityId",
        "referenced_table_name": "FundingOpportunities",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "WorkFlowItemId",
        "referenced_table_name": "WorkFlowItems",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AwardedByRevenueSources",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "AwardedAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "RemainingAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "FOAwardGUID",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FundingOpportunityRevenueSourceGUID",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOAwardGUID",
        "referenced_table_name": "FOAwards",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundingOpportunityRevenueSourceGUID",
        "referenced_table_name": "FundingOpportunityRevenueSourceses",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "WorkFlowItems",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "ItemName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "StepNumber",
        "data_type": "int"
      },
      {
        "column_name": "WorkFlowActionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "WorkFlowId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "WorkFlowActionId",
        "referenced_table_name": "WorkFlowActions",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "WorkFlowId",
        "referenced_table_name": "WorkFlows",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AwardLetterTemplates",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "AwardLetterName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AwardLetterNameEnglish",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AwardLetterContent",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "WorkFlows",
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
        "column_name": "TenantId",
        "data_type": "int"
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
        "column_name": "ParentWorkFlowId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "BudgetTemplateDetails",
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
        "column_name": "JsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsSubAward",
        "data_type": "bit"
      },
      {
        "column_name": "BudgetTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "Type",
        "data_type": "int"
      },
      {
        "column_name": "AllowSubAward",
        "data_type": "bit"
      },
      {
        "column_name": "IsContract",
        "data_type": "bit"
      },
      {
        "column_name": "IsProgramOffice",
        "data_type": "bit"
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
        "column_name": "AllowParentAdd",
        "data_type": "bit"
      },
      {
        "column_name": "AllowParentDelete",
        "data_type": "bit"
      },
      {
        "column_name": "AllowSubParentAdd",
        "data_type": "bit"
      },
      {
        "column_name": "AllowCategorySwapping",
        "data_type": "bit"
      },
      {
        "column_name": "LinkBudgetTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AllowBudgetNarrative",
        "data_type": "bit"
      },
      {
        "column_name": "AllowBudgetCalculations",
        "data_type": "bit"
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
        "column_name": "AllowRegularBudget",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "BudgetTemplateId",
        "referenced_table_name": "BudgetTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "LinkBudgetTemplateId",
        "referenced_table_name": "BudgetTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "WorkFlowUsers",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "WorkFlowItemId",
        "data_type": "uniqueidentifier"
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
      },
      {
        "column_name": "WorkFlowItemId",
        "referenced_table_name": "WorkFlowItems",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "BudgetTemplates",
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
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "OrganizationUnitId",
        "data_type": "bigint"
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
        "column_name": "TemplateBudgetType",
        "data_type": "int"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "ConfigSettings",
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
        "column_name": "DisallowExternalApplicantRegistration",
        "data_type": "bit"
      },
      {
        "column_name": "AllowLoginNote",
        "data_type": "bit"
      },
      {
        "column_name": "LoginNote",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "BudgetYears",
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
        "column_name": "Year",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "CFDAs",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "CFDANumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CFDAProgramName",
        "data_type": "nvarchar"
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
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "CheckRequests",
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
        "column_name": "OrganizationName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "VendorNo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "PaymentAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "Address",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProjectName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AnnouncementName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Memo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CheckNo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "InvoiceNo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ApprovedDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "CheckRequestDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "PaymentDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "CheckStatus",
        "data_type": "int"
      },
      {
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ManagerId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ContactId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "SendTo",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOAwardId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "PaymentScheduleDetailId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ContactId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ManagerId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "SendTo",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOAwardId",
        "referenced_table_name": "FOAwards",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "PaymentScheduleDetailId",
        "referenced_table_name": "PaymentScheduleDetails",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "ContactType",
        "data_type": "int"
      },
      {
        "column_name": "Gender",
        "data_type": "int"
      },
      {
        "column_name": "Prefix",
        "data_type": "nvarchar"
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
        "column_name": "OrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
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
        "column_name": "ContactPrograms",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ContactTypes",
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
    "table_name": "ContributingAwards",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "AwardNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AwardTitle",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AwardType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AwardStartDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "AwardEndDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "FundAmountBase",
        "data_type": "decimal"
      },
      {
        "column_name": "FundAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "CFDAId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FundId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "CFDAId",
        "referenced_table_name": "CFDAs",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundId",
        "referenced_table_name": "Funds",
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
    "table_name": "Countries",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "DeclinedDetails",
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
        "column_name": "DeclinedReason",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Description",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DeclineEmailGUID",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "Detailses",
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
        "column_name": "LastModificationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastModifierUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "PortalBannerTitle",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "DocumentForProjects",
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
        "column_name": "DocumentUrl",
        "data_type": "nvarchar"
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
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOAwardId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DocumentId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "DocumentId",
        "referenced_table_name": "Documents",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOAwardId",
        "referenced_table_name": "FOAwards",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "EntityType",
        "data_type": "int"
      },
      {
        "column_name": "EntityGuid",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "SequenceNum",
        "data_type": "int"
      },
      {
        "column_name": "Description",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DocumentName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DocumentFormat",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DocumentFilePath",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsPostAwardAttachment",
        "data_type": "bit"
      },
      {
        "column_name": "IsPostAwardBudgetAttachment",
        "data_type": "bit"
      },
      {
        "column_name": "ApplicationUploadDocumentType",
        "data_type": "int"
      },
      {
        "column_name": "IsAnnoucementSummary",
        "data_type": "bit"
      },
      {
        "column_name": "DocumentTypeId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "IsApplicationSubmitReport",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "DocumentTypeId",
        "referenced_table_name": "DocumentTypes",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "DocumentTypes",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "DocumentTypeName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DocumentTypeInEnglish",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Description",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AllowedExtensionTypes",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "DocuSignWithAwards",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "EnvelopesId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DocumentId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "SendToDocuSignDate",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Status",
        "data_type": "nvarchar"
      },
      {
        "column_name": "UrlForDoc_Main",
        "data_type": "nvarchar"
      },
      {
        "column_name": "UrlForDoc_Complete",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CompleteDocuSignDate",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOAwardId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CCContactId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AwardLetterTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsdocdeletefromProject",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "AwardLetterTemplateId",
        "referenced_table_name": "AwardLetterTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "CCContactId",
        "referenced_table_name": "Contacts",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOAwardId",
        "referenced_table_name": "FOAwards",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "EmailTemplates",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "TemplateName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TemplateNameEnglish",
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
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "EmailTemplateTypes",
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
        "column_name": "PropertyName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TypeName",
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
    "table_name": "FAClosureNotifications",
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
        "column_name": "DaysPriorToClose4",
        "data_type": "bigint"
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
        "column_name": "EmailTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FundingOpportunityId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOAnnouncementId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DaysPriorToClose1",
        "data_type": "bigint"
      },
      {
        "column_name": "DaysPriorToClose2",
        "data_type": "bigint"
      },
      {
        "column_name": "DaysPriorToClose3",
        "data_type": "bigint"
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
      }
    ],
    "foreign_keys": [
      {
        "column_name": "EmailTemplateId",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOAnnouncementId",
        "referenced_table_name": "FOAnnouncements",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundingOpportunityId",
        "referenced_table_name": "FundingOpportunities",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FOAnnouncements",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "AnnouncementName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AnnouncementNameEnglish",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AnnouncementDescription",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsEnableSectionWeighting",
        "data_type": "bit"
      },
      {
        "column_name": "IsShowWeightsApplicant",
        "data_type": "bit"
      },
      {
        "column_name": "IsTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "ExpectedAwards",
        "data_type": "int"
      },
      {
        "column_name": "AnnouncementOpenDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ApplicationDueDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ReviewOpenDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ReviewCloseDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "AwardOpenDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "AwardCloseDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "MinAwardAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "MaxAwardAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "FOAnouncementInstructions",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsPublished",
        "data_type": "bit"
      },
      {
        "column_name": "FOStatus",
        "data_type": "int"
      },
      {
        "column_name": "AreQuestionsWeighted",
        "data_type": "bit"
      },
      {
        "column_name": "FundingOpportunityId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AwardLetterTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "AnnouncementCloseDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "AnnouncementOwnerId",
        "data_type": "bigint"
      },
      {
        "column_name": "AnnouncementType",
        "data_type": "int"
      },
      {
        "column_name": "FundingType",
        "data_type": "int"
      },
      {
        "column_name": "AllowMultipleApplication",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "AnnouncementOwnerId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "AwardLetterTemplateId",
        "referenced_table_name": "AwardLetterTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundingOpportunityId",
        "referenced_table_name": "FundingOpportunities",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FOApplications",
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
        "column_name": "ApplicationDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ApplicationFormName",
        "data_type": "nvarchar"
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
        "column_name": "SubmitDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "Comment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DeclinedReason",
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
        "column_name": "ApplicationStatus",
        "data_type": "int"
      },
      {
        "column_name": "ProjectSummary",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ApplicantOrganizationGuId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ApplicantContactGuId",
        "data_type": "bigint"
      },
      {
        "column_name": "FOAnnouncementId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AuthorizedOfficialId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FiscalOfficerId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ProjectCoordinatorId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ProjectDirectorId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewRoundId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewProcessId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewerId",
        "data_type": "bigint"
      },
      {
        "column_name": "ReviewerPanelId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ReviewerRoundNumber",
        "data_type": "int"
      },
      {
        "column_name": "Awarded",
        "data_type": "bit"
      },
      {
        "column_name": "InitialRequestedAmount",
        "data_type": "decimal"
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
        "column_name": "DeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "DeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "IsDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "ReviewDeleted",
        "data_type": "bit"
      },
      {
        "column_name": "ReviewDeleterUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "ReviewDeletionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "SubmittedBy",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProjectStatus",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ApplicantContactGuId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewerId",
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
        "column_name": "FOAnnouncementId",
        "referenced_table_name": "FOAnnouncements",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ApplicantOrganizationGuId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewerPanelId",
        "referenced_table_name": "ReviewerPanels",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewProcessId",
        "referenced_table_name": "ReviewProcesses",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReviewRoundId",
        "referenced_table_name": "ReviewRounds",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FOAssessmentSessions",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "AssessmentDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "Score",
        "data_type": "decimal"
      },
      {
        "column_name": "PercentCompleted",
        "data_type": "decimal"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AssessmentId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "ReviewerAssessmentStatus",
        "data_type": "int"
      },
      {
        "column_name": "IsBudgetCompleted",
        "data_type": "bit"
      },
      {
        "column_name": "AssessmentSessionBudgetType",
        "data_type": "int"
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
        "column_name": "Gv_OrganizationId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "UserId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "AssessmentId",
        "referenced_table_name": "Assessments",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "Gv_OrganizationId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "FOAwardAttachments",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "IsMandatory",
        "data_type": "bit"
      },
      {
        "column_name": "DocumentId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "DocumentId",
        "referenced_table_name": "Documents",
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
    "table_name": "FOAwards",
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
        "column_name": "TenantId",
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
        "column_name": "FOApplicationGUID",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOAnnouncementGUID",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FundingType",
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
        "column_name": "FiscalAwardYear",
        "data_type": "nvarchar"
      },
      {
        "column_name": "GrantAwardNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsSubProject",
        "data_type": "bit"
      },
      {
        "column_name": "ParentProjectGrantAwardNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ParentProjectName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "UEI",
        "data_type": "nvarchar"
      },
      {
        "column_name": "PaymentScheduleType",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOAnnouncementGUID",
        "referenced_table_name": "FOAnnouncements",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOApplicationGUID",
        "referenced_table_name": "FOApplications",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "ServiceName",
        "data_type": "nvarchar"
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
        "column_name": "ReturnValue",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ExecutionTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "ExecutionDuration",
        "data_type": "int"
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
        "column_name": "BrowserInfo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Exception",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ImpersonatorUserId",
        "data_type": "bigint"
      },
      {
        "column_name": "ImpersonatorTenantId",
        "data_type": "int"
      },
      {
        "column_name": "CustomData",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "FOFormFieldReponses",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "ResponseText",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ResponseScore",
        "data_type": "decimal"
      },
      {
        "column_name": "SequenceNumber",
        "data_type": "int"
      },
      {
        "column_name": "FOFormFieldId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOFormFieldId",
        "referenced_table_name": "FOFormFields",
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
        "column_name": "JobType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "JobArgs",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TryCount",
        "data_type": "smallint"
      },
      {
        "column_name": "NextTryTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "LastTryTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "IsAbandoned",
        "data_type": "bit"
      },
      {
        "column_name": "Priority",
        "data_type": "tinyint"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "FOFormFields",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "FieldLabel",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FieldLabelEnglish",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FieldType",
        "data_type": "int"
      },
      {
        "column_name": "SequenceNumber",
        "data_type": "int"
      },
      {
        "column_name": "FieldWeightage",
        "data_type": "decimal"
      },
      {
        "column_name": "IsSystemScorable",
        "data_type": "bit"
      },
      {
        "column_name": "isTemplate",
        "data_type": "bit"
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
        "column_name": "FOFormSectionContentId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IncludeReviewerQuestionsId",
        "data_type": "uniqueidentifier"
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
        "column_name": "MaxRowLimit",
        "data_type": "int"
      },
      {
        "column_name": "QuestionJSON",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EnabledCommentsOrNarrative",
        "data_type": "int"
      },
      {
        "column_name": "NarrativeCharacterLimit",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "IncludeReviewerQuestionsId",
        "referenced_table_name": "FOFormFields",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOFormSectionContentId",
        "referenced_table_name": "FOFormSectionContents",
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
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DisplayName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Discriminator",
        "data_type": "nvarchar"
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
        "column_name": "AnnualPrice",
        "data_type": "decimal"
      },
      {
        "column_name": "TrialDayCount",
        "data_type": "int"
      },
      {
        "column_name": "WaitingDayAfterExpire",
        "data_type": "int"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "FOFormInstructions",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "InstructionText",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FOFormFieldId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOFormSectionContentId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOFormFieldId",
        "referenced_table_name": "FOFormFields",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOFormSectionContentId",
        "referenced_table_name": "FOFormSectionContents",
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
    "table_name": "FOForms",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "FoFormName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AssessmentId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "AssessmentId",
        "referenced_table_name": "Assessments",
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
    "table_name": "FOFormSectionContents",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "HeaderName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "HeaderNameEnglish",
        "data_type": "nvarchar"
      },
      {
        "column_name": "HeaderSeqNo",
        "data_type": "int"
      },
      {
        "column_name": "isTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "SortOrder",
        "data_type": "int"
      },
      {
        "column_name": "FOFormSectionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOFormSectionId",
        "referenced_table_name": "FOFormSections",
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
    "table_name": "FOFormSections",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "SectionName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "SectionOrder",
        "data_type": "int"
      },
      {
        "column_name": "SectionDisplayNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ReviewMethod",
        "data_type": "int"
      },
      {
        "column_name": "SectionWeight",
        "data_type": "decimal"
      },
      {
        "column_name": "isSectionAsTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "FOFormId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "AssessmentId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "IsConfidential",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "AssessmentId",
        "referenced_table_name": "Assessments",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOFormId",
        "referenced_table_name": "FOForms",
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
        "column_name": "TenantId",
        "data_type": "int"
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
        "column_name": "Discriminator",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EditionId",
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
    "table_name": "FOFundingActivityCategories",
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
        "column_name": "FundingOpportunityId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FundingActivityCategoryId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FundingActivityCategoryId",
        "referenced_table_name": "FundingActivityCategories",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundingOpportunityId",
        "referenced_table_name": "FundingOpportunities",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
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
        "column_name": "IsDisabled",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "FundingActivityCategories",
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
        "column_name": "FundingActivityCategoryName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": []
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
        "column_name": "LanguageName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Source",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Key",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Value",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "FundingOpportunities",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "FundingOpportunityTitle",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FundingOpportunityTitleEnglish",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FundingOpportunityNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AwardCategoryCode",
        "data_type": "int"
      },
      {
        "column_name": "EntityType",
        "data_type": "int"
      },
      {
        "column_name": "OpportunityAwardTypeCode",
        "data_type": "int"
      },
      {
        "column_name": "ExpectedNumberOfAward",
        "data_type": "int"
      },
      {
        "column_name": "FundAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "FundAmountBase",
        "data_type": "decimal"
      },
      {
        "column_name": "OriginalCloseDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ArchiveDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "RiskAssessmentFrequencyCode",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "AdditionalEligibilityInstruction",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FOStatus",
        "data_type": "int"
      },
      {
        "column_name": "AnnouncementStatus",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ParentProgramId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationUnitId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "AwardLetterTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "EmailTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "GrantTypeEnum",
        "data_type": "int"
      },
      {
        "column_name": "FiscalReportingFrequencyCode",
        "data_type": "int"
      },
      {
        "column_name": "PerformanceReportingFrequencyCode",
        "data_type": "int"
      },
      {
        "column_name": "WorkFlowId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsCompleted",
        "data_type": "bit"
      },
      {
        "column_name": "RiskAssessmentEnum",
        "data_type": "int"
      },
      {
        "column_name": "PushAwardToPostAwardAs",
        "data_type": "int"
      },
      {
        "column_name": "FundingOpportunityBudgetType",
        "data_type": "int"
      },
      {
        "column_name": "AnnouncementType",
        "data_type": "int"
      },
      {
        "column_name": "AllowMultipleApplication",
        "data_type": "bit"
      },
      {
        "column_name": "ProjectManagement",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "AwardLetterTemplateId",
        "referenced_table_name": "AwardLetterTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "EmailTemplateId",
        "referenced_table_name": "EmailTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "OrganizationUnitId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ParentProgramId",
        "referenced_table_name": "Programs",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "WorkFlowId",
        "referenced_table_name": "WorkFlows",
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
        "column_name": "NotificationName",
        "data_type": "nvarchar"
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
        "column_name": "EntityTypeName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityTypeAssemblyQualifiedName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Severity",
        "data_type": "tinyint"
      },
      {
        "column_name": "UserIds",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ExcludedUserIds",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantIds",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "FundingOpportunityBudgets",
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
        "column_name": "FundingOpportunityId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "BudgetTemplateDetailId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "BudgetTemplateDetailId",
        "referenced_table_name": "BudgetTemplateDetails",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundingOpportunityId",
        "referenced_table_name": "FundingOpportunities",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "NotificationName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityTypeName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityTypeAssemblyQualifiedName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityId",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "FundingOpportunityDetails",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "ApplicationOpenDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ApplicationCloseDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "AwardOpenDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "AwardCloseDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ExpectedAwards",
        "data_type": "int"
      },
      {
        "column_name": "ReviewOpenDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ReviewCloseDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "MinAwardAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "MaxAwardAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "FundingOpportunityId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "AnnouncementTempleteId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OpportunityOwner",
        "data_type": "uniqueidentifier"
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
        "column_name": "AnnouncementTempleteId",
        "referenced_table_name": "AnnouncementTempletes",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundingOpportunityId",
        "referenced_table_name": "FundingOpportunities",
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
    "table_name": "FundingOpportunityEXTs",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "Json",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FundingOpportunityId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FundingOpportunityId",
        "referenced_table_name": "FundingOpportunities",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "ParentId",
        "data_type": "bigint"
      },
      {
        "column_name": "Code",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DisplayName",
        "data_type": "nvarchar"
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
    "table_name": "FundingOpportunityRevenueSourceses",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "RevenueSourceType",
        "data_type": "int"
      },
      {
        "column_name": "FundedAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "FORSStartDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "FORSSEndDate",
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
        "column_name": "PaymentRequestReport",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsPaymentPerformanceBased",
        "data_type": "bit"
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
        "column_name": "FundingOpportunityId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "RevenueSourceOrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ProgramFundingId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CFDAId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "TotalAwardedAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "TotalRevertAmount",
        "data_type": "decimal"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "CFDAId",
        "referenced_table_name": "CFDAs",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundingOpportunityId",
        "referenced_table_name": "FundingOpportunities",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "RevenueSourceOrganizationId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ProgramFundingId",
        "referenced_table_name": "ProgramFundings",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsGranted",
        "data_type": "bit"
      },
      {
        "column_name": "Discriminator",
        "data_type": "nvarchar"
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
    "table_name": "FundingOpportunityWorkFlows",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "IsApproved",
        "data_type": "bit"
      },
      {
        "column_name": "IsRejected",
        "data_type": "bit"
      },
      {
        "column_name": "Reason",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FundingOpportunityId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "WorkFlowItemId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
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
        "column_name": "FundingOpportunityId",
        "referenced_table_name": "FundingOpportunities",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "WorkFlowItemId",
        "referenced_table_name": "WorkFlowItems",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpPersistedGrants",
    "columns": [
      {
        "column_name": "Id",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Type",
        "data_type": "nvarchar"
      },
      {
        "column_name": "SubjectId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClientId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      },
      {
        "column_name": "Expiration",
        "data_type": "datetime2"
      },
      {
        "column_name": "Data",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "Funds",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "FundName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FundDate",
        "data_type": "datetime2"
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
        "column_name": "StartDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "EndDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "ConversionRate",
        "data_type": "decimal"
      },
      {
        "column_name": "FundAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "FundAmountBase",
        "data_type": "decimal"
      },
      {
        "column_name": "OrganizationId",
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
    "table_name": "AbpRoleClaims",
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
        "column_name": "ClaimType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClaimValue",
        "data_type": "nvarchar"
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
    "table_name": "GranteeReportForPayments",
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
        "column_name": "ReportType",
        "data_type": "int"
      },
      {
        "column_name": "DueDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "DateSubmitted",
        "data_type": "datetime2"
      },
      {
        "column_name": "ReviewerComment",
        "data_type": "nvarchar"
      },
      {
        "column_name": "JsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "SavedJsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsSaved",
        "data_type": "bit"
      },
      {
        "column_name": "IsUpdated",
        "data_type": "bit"
      },
      {
        "column_name": "Status",
        "data_type": "int"
      },
      {
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOAwardId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOAnnouncementId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "GranteeReportTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "PaymentScheduleDetailId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "DateApproved",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOAnnouncementId",
        "referenced_table_name": "FOAnnouncements",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOAwardId",
        "referenced_table_name": "FOAwards",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "GranteeReportTemplateId",
        "referenced_table_name": "GranteeReportTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "PaymentScheduleDetailId",
        "referenced_table_name": "PaymentScheduleDetails",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ReportType",
        "referenced_table_name": "StringMapDetails",
        "referenced_column_name": "Id"
      }
    ]
  },
  {
    "table_name": "AbpRoles",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DisplayName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsStatic",
        "data_type": "bit"
      },
      {
        "column_name": "IsDefault",
        "data_type": "bit"
      },
      {
        "column_name": "NormalizedName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ConcurrencyStamp",
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
    "table_name": "GranteeReportTemplates",
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
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "ReportInstructions",
        "data_type": "nvarchar"
      },
      {
        "column_name": "JsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "NewJsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "StringMapDetailId",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "StringMapDetailId",
        "referenced_table_name": "StringMapDetails",
        "referenced_column_name": "Id"
      }
    ]
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
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
    "table_name": "MessageAttachments",
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
        "column_name": "DocumentFilePath",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DocumentName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DocumentFormat",
        "data_type": "nvarchar"
      },
      {
        "column_name": "MessageId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "MessageId",
        "referenced_table_name": "Messages",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "NotificationName",
        "data_type": "nvarchar"
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
        "column_name": "EntityTypeName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityTypeAssemblyQualifiedName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EntityId",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Severity",
        "data_type": "tinyint"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "Messages",
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
        "column_name": "Subject",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Messages",
        "data_type": "nvarchar"
      },
      {
        "column_name": "status",
        "data_type": "int"
      },
      {
        "column_name": "Type",
        "data_type": "int"
      },
      {
        "column_name": "IsSent",
        "data_type": "bit"
      },
      {
        "column_name": "NoReply",
        "data_type": "bit"
      },
      {
        "column_name": "ToId",
        "data_type": "bigint"
      },
      {
        "column_name": "FromId",
        "data_type": "bigint"
      },
      {
        "column_name": "ToOrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FromOrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ParentId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FromId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ToId",
        "referenced_table_name": "AbpUsers",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ParentId",
        "referenced_table_name": "Messages",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FromOrganizationId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ToOrganizationId",
        "referenced_table_name": "Organizations",
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
        "column_name": "TenancyName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ConnectionString",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "EditionId",
        "data_type": "int"
      },
      {
        "column_name": "SubscriptionEndDateUtc",
        "data_type": "datetime2"
      },
      {
        "column_name": "IsInTrialPeriod",
        "data_type": "bit"
      },
      {
        "column_name": "CustomCssId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "LogoId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "LogoFileType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "SubscriptionPaymentType",
        "data_type": "int"
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
    "table_name": "NoteAttachments",
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
        "column_name": "DocumentName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DocumentFormat",
        "data_type": "nvarchar"
      },
      {
        "column_name": "DocumentFilePath",
        "data_type": "nvarchar"
      },
      {
        "column_name": "NoteId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "NoteId",
        "referenced_table_name": "Notes",
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
      },
      {
        "column_name": "EmailAddress",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "Notes",
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
        "column_name": "NoteText",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Subject",
        "data_type": "nvarchar"
      },
      {
        "column_name": "OrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "NoteType",
        "data_type": "int"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "OrganizationId",
        "referenced_table_name": "Organizations",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "NoteType",
        "referenced_table_name": "StringMapDetails",
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
      },
      {
        "column_name": "ClaimType",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ClaimValue",
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
    "table_name": "ObjectiveTemplateDetails",
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
        "column_name": "JsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ObjectiveTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FundingOpportunityId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOAssessmentSessionId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "AddNew_Edit_Delete_Applicant_Created_Activities",
        "data_type": "bit"
      },
      {
        "column_name": "AddNew_Edit_Delete_Applicant_Created_Goals",
        "data_type": "bit"
      },
      {
        "column_name": "AddNew_Edit_Delete_Applicant_Created_Objectives",
        "data_type": "bit"
      },
      {
        "column_name": "AddNew_Edit_Delete_Applicant_Created_PerformanceMeasures",
        "data_type": "bit"
      },
      {
        "column_name": "AllowApplicantTo_Edit_Delete_Activities",
        "data_type": "bit"
      },
      {
        "column_name": "AllowApplicantTo_Edit_Delete_Goals",
        "data_type": "bit"
      },
      {
        "column_name": "AllowApplicantTo_Edit_Delete_Objectives",
        "data_type": "bit"
      },
      {
        "column_name": "AllowApplicantTo_Edit_Delete_PerformanceMeasures",
        "data_type": "bit"
      },
      {
        "column_name": "IsSaveTemplate",
        "data_type": "bit"
      },
      {
        "column_name": "ObjectiveTemplateTypes",
        "data_type": "int"
      },
      {
        "column_name": "LinkObjectiveTemplateId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOAssessmentSessionId",
        "referenced_table_name": "FOAssessmentSessions",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FundingOpportunityId",
        "referenced_table_name": "FundingOpportunities",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "LinkObjectiveTemplateId",
        "referenced_table_name": "ObjectiveTemplates",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ObjectiveTemplateId",
        "referenced_table_name": "ObjectiveTemplates",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "TenancyName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "UserNameOrEmailAddress",
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
        "column_name": "BrowserInfo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Result",
        "data_type": "tinyint"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "ObjectiveTemplates",
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
        "column_name": "ProjectName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ParentGoal",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "LoginProvider",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProviderKey",
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
    "table_name": "Organizations",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "OrganizationName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "OrganizationNameEnglish",
        "data_type": "nvarchar"
      },
      {
        "column_name": "OrganizationType",
        "data_type": "int"
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
        "column_name": "DAINNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "WebsiteURL",
        "data_type": "nvarchar"
      },
      {
        "column_name": "OrganizationSourceType",
        "data_type": "int"
      },
      {
        "column_name": "IsInternalOrganization",
        "data_type": "bit"
      },
      {
        "column_name": "OrganizationTypeInfo",
        "data_type": "int"
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
        "column_name": "PhysicalAddressId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "MailingAddressId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "ParentOrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "OrganizationUnitId",
        "data_type": "bigint"
      },
      {
        "column_name": "OrganizationID",
        "data_type": "nvarchar"
      },
      {
        "column_name": "UEI",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": [
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "TenantNotificationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "State",
        "data_type": "int"
      },
      {
        "column_name": "CreationTime",
        "data_type": "datetime2"
      }
    ],
    "foreign_keys": []
  },
  {
    "table_name": "PaymentScheduleDetails",
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
        "column_name": "PaymentNo",
        "data_type": "nvarchar"
      },
      {
        "column_name": "RequiredGranteeReport",
        "data_type": "bit"
      },
      {
        "column_name": "PlannedPaymentDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "PaymentPercentage",
        "data_type": "decimal"
      },
      {
        "column_name": "PaymentAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "RequestedDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "PaymentOrderNo",
        "data_type": "int"
      },
      {
        "column_name": "PaymentStatus",
        "data_type": "int"
      },
      {
        "column_name": "FOAwardId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "GranteeReportTemplateId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "FOAnnouncementId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOAnnouncementId",
        "referenced_table_name": "FOAnnouncements",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "FOAwardId",
        "referenced_table_name": "FOAwards",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "GranteeReportTemplateId",
        "referenced_table_name": "GranteeReportTemplates",
        "referenced_column_name": "Id"
      }
    ]
  },
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
        "column_name": "TenantId",
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
        "column_name": "IsDeleted",
        "data_type": "bit"
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
    "table_name": "ProgramFundings",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "ProgramFundStartDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ProgramFundEndDate",
        "data_type": "datetime2"
      },
      {
        "column_name": "ProgramFindingAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "ProgramFindingAmountBase",
        "data_type": "decimal"
      },
      {
        "column_name": "IsReversed",
        "data_type": "bit"
      },
      {
        "column_name": "AwardNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "AppropriationNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProgramFundCode",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProgramId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "CFDAId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ContributingAwardId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "Gv_OrganizationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "CFDAId",
        "referenced_table_name": "CFDAs",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ContributingAwardId",
        "referenced_table_name": "ContributingAwards",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "Gv_OrganizationId",
        "referenced_table_name": "Organizations",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
        "data_type": "bigint"
      },
      {
        "column_name": "RoleId",
        "data_type": "int"
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
    "table_name": "Programs",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "ProgramName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProgramNameEnglish",
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
        "column_name": "ParentProgramId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "ConversionRate",
        "data_type": "decimal"
      },
      {
        "column_name": "FundAmount",
        "data_type": "decimal"
      },
      {
        "column_name": "FundAmountBase",
        "data_type": "decimal"
      },
      {
        "column_name": "ProgramCode",
        "data_type": "nvarchar"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "ParentProgramId",
        "referenced_table_name": "Programs",
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
        "column_name": "AuthenticationSource",
        "data_type": "nvarchar"
      },
      {
        "column_name": "UserName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "EmailAddress",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Name",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Surname",
        "data_type": "nvarchar"
      },
      {
        "column_name": "Password",
        "data_type": "nvarchar"
      },
      {
        "column_name": "EmailConfirmationCode",
        "data_type": "nvarchar"
      },
      {
        "column_name": "PasswordResetCode",
        "data_type": "nvarchar"
      },
      {
        "column_name": "LockoutEndDateUtc",
        "data_type": "datetime2"
      },
      {
        "column_name": "AccessFailedCount",
        "data_type": "int"
      },
      {
        "column_name": "IsLockoutEnabled",
        "data_type": "bit"
      },
      {
        "column_name": "PhoneNumber",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsPhoneNumberConfirmed",
        "data_type": "bit"
      },
      {
        "column_name": "SecurityStamp",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsTwoFactorEnabled",
        "data_type": "bit"
      },
      {
        "column_name": "IsEmailConfirmed",
        "data_type": "bit"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "NormalizedUserName",
        "data_type": "nvarchar"
      },
      {
        "column_name": "NormalizedEmailAddress",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ConcurrencyStamp",
        "data_type": "nvarchar"
      },
      {
        "column_name": "ProfilePictureId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ShouldChangePasswordOnNextLogin",
        "data_type": "bit"
      },
      {
        "column_name": "SignInTokenExpireTimeUtc",
        "data_type": "datetime2"
      },
      {
        "column_name": "SignInToken",
        "data_type": "nvarchar"
      },
      {
        "column_name": "GoogleAuthenticatorKey",
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
    "table_name": "ProjectCloseOutDetails",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "CloseOutProfileInstruction",
        "data_type": "nvarchar"
      },
      {
        "column_name": "IsActive",
        "data_type": "bit"
      },
      {
        "column_name": "JsonData",
        "data_type": "nvarchar"
      },
      {
        "column_name": "FOApplicationId",
        "data_type": "uniqueidentifier"
      },
      {
        "column_name": "ProjectCloseOutTemplateId",
        "data_type": "uniqueidentifier"
      }
    ],
    "foreign_keys": [
      {
        "column_name": "FOApplicationId",
        "referenced_table_name": "FOApplications",
        "referenced_column_name": "Id"
      },
      {
        "column_name": "ProjectCloseOutTemplateId",
        "referenced_table_name": "ProjectCloseOutTemplates",
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
        "column_name": "TenantId",
        "data_type": "int"
      },
      {
        "column_name": "UserId",
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
  }
];