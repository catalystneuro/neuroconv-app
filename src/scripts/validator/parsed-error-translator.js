// Translation functions **************************************************************************************************************************


ParsedErrorTranslator = {
    translateMissingSubmission: () => {
        return [
            "You are missing a top level submission file",
            "Fix this by creating a top level submission file for your dataset",
            "URL: fix.SODA.page",
        ],
    },

    translateMissingAwardNumber: () => {
        return [
            "Your Submission file is missing an award number",
            "Fix this by visiting your submission file and adding an award number",
            "URL: fix.SODA.page",
        ],
    },

    translateMissingOrganSystem: () => {
        return [
            "Your dataset description file is missing information on the organ system of the study",
            "Fix this by visiting your dataset description file and adding an organ system field/column with appropriate data",
            "URL: fix.SODA.page",
        ],
    },

    translateMissingModality: () => {
        return [
            "Your dataset description file is missing information on the modality of the study",
            "Fix this by visiting your dataset description file and adding a modality field/column with the appropriate information",
            "URL: fix.SODA.page",
        ],
  },

    translateMissingTechnique: () => {
        return [
            "Your dataset description file is missing information on the techniques used in the study",
            "Fix this by visiting your dataset description file and adding a study technique column/field with the appropriate information",
            "URL: fix.SODA.page",
        ],
  },

    translateMissingTechniqueValues: () => {
        return [
            "Your dataset description file's techniques field/column is missing study techniques.",
            "Fix this by visiting your dataset description file and adding at least one study technique in the 'Study technique' field/column.",
            "URL: fix.SODA.page",
        ],
  },

    // TODO: Make it match Local or Pennsieve url/name for the error message translation.
    // TODO: Take out idk lol
    translateIncorrectDatasetName: () => {
        return [
            "Your dataset's name/package does not match expectations of the Pennsieve platform/local datasets",
            "Fix this by changing your dataset's name if this is about your dataset. If not idk lol",
            "URL: fix.SODA.page",
        ],
  },

    translateInvalidDatasetId: () => {
        return [
            "Your Pennsieve dataset does not have a valid UUID",
            "Fix this by contacting the Pennsieve team using the 'Get Help' sidebar menu option.",
            "URL: fpath to Pennsieve",
        ],
  },

    translateInvalidOrganization: () => {
        return [
            "Your organization ID is invalid",
            "Fix this by contacting the Pennsieve team using the 'Get Help' sidebar menu option.",
            "URL: fpath to Pennsieve",
        ],
  },

    translateMissingFunding: () => {
        return [
            "Your dataset description file is missing a Funding field/column",
            "Fix this by adding a Funding field/column to your dataset description column.",
            "URL: path to SODA",
        ],
  },

    translateMissingProtocolUrlOrDoi: () => {
        return [
            "Your samples file is missing a 'protocol url or doi' column/field",
            "Fix this by adding a 'protocol url or doi' field/column to your samples file.",
            "URL: path to SODA",
        ]
    }
}