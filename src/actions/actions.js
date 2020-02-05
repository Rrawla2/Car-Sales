export const ADD_FEATURES = "ADD_FEATURES";
export const REMOVE_FEATURES = "REMOVE_FEATURES";

export const addFeatures = AdditionalFeature => {
    console.log("AdditionalFeature: ", AdditionalFeature);
    return {
        type: "ADD_FEATURES",
        payload: AdditionalFeature
    }
}

export const removeFeatures = AddedFeature => {
    console.log("AddedFeature: ", AddedFeature);
    return {
        type: "REMOVE_FEATURES",
        payload: AddedFeature
    }
}