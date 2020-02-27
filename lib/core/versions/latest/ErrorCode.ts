/**
 * Error codes used ONLY by this version of the protocol.
 */
export default {
  AnchoredDataIncorrectFormat: 'anchored_data_incorrect_format',
  AnchoredDataNumberOfOperationsGreaterThanMax: 'anchored_data_number_of_operations_greater_than_max',
  AnchoredDataNumberOfOperationsLessThanZero: 'anchored_data_number_of_operations_less_than_zero',
  AnchoredDataNumberOfOperationsNotFourBytes: 'anchored_data_number_of_operations_not_four_bytes',
  AnchoredDataNumberOfOperationsNotInteger: 'anchored_data_number_of_operations_not_integer',
  AnchorFileMapFileHashMissing: 'anchor_file_map_file_hash_missing',
  AnchorFileMapFileHashNotString: 'anchor_file_map_file_hash_not_string',
  AnchorFileMapFileHashUnsupported: 'anchor_file_map_file_hash_unsupported',
  AnchorFileDecompressionFailure: 'anchor_file_decompression_failed',
  AnchorFileDidUniqueSuffixEntryNotString: 'anchor_file_did_unique_suffix_entry_not_string',
  AnchorFileDidUniqueSuffixesCountIncorrect: 'anchor_file_did_unique_suffixes_count_incorrect',
  AnchorFileDidUniqueSuffixesHasDuplicates: 'anchor_file_did_unique_suffixes_has_duplicates',
  AnchorFileDidUniqueSuffixesMissing: 'anchor_file_did_unique_suffixes_missing',
  AnchorFileDidUniqueSuffixesNotArray: 'anchor_file_did_unique_suffixes_not_array',
  AnchorFileDidUniqueSuffixTooLong: 'anchor_file_did_unique_suffix_too_long',
  AnchorFileExceededMaxOperationCount: 'anchor_file_exceeded_max_operation_count',
  AnchorFileHasUnknownProperty: 'anchor_file_has_unknown_property',
  AnchorFileNotJson: 'anchor_file_not_json',
  BatchFileOperationCountExceedsLimit: 'batch_file_operation_count_exceeds_limit',
  BatchFileOperationCountMismatch: 'batch_file_operation_count_mismatch',
  BatchFileOperationsNotArrayOfStrings: 'batch_file_operations_not_array_of_string',
  BatchFileOperationsPropertyNotArray: 'batch_file_operations_property_not_array',
  BatchFileOperationMismatch: 'batch_file_operation_mismatch',
  BatchFileOperationSizeExceedsLimit: 'batch_file_operation_size_exceeds_limit',
  BatchFileUnexpectedProperty: 'batch_file_unexpected_property',
  BatchWriterAlreadyHasOperationForDid: 'batch_writer_already_has_operation_for_did',
  CasFileHashNotValid: 'cas_file_hash_not_valid',
  CasFileNotAFile: 'cas_file_not_a file',
  CasFileNotFound: 'cas_file_not_found',
  CasFileTooLarge: 'cas_file_too_large',
  CasNotReachable: 'cas_not_reachable',
  CreateOperationMissingOrUnknownProperty: 'create_operation_missing_or_unknown_property',
  CreateOperationDataMissingOrNotString: 'create_operation_data_missing_or_not_string',
  CreateOperationDataMissingOrUnknownProperty: 'create_operation_data_missing_or_unknown_property',
  CreateOperationDocumentMissing: 'create_operation_document_missing',
  CreateOperationRecoveryKeyMissing: 'create_operation_recovery_key_missing',
  CreateOperationRecoveryKeyInvalid: 'create_operation_recovery_key_invalid',
  CreateOperationSuffixDataMissingOrNotString: 'create_operation_suffix_data_missing_or_not_string',
  CreateOperationSuffixDataMissingOrUnknownProperty: 'create_operation_suffix_data_missing_or_unknown_property',
  CreateOperationTypeIncorrect: 'create_operation_type_incorrect',
  DidIncorrectPrefix: 'did_incorrect_prefix',
  DidLongFormOnlyInitialValuesParameterIsAllowed: 'did_long_form_only_initial_values_parameter_is_allowed',
  DidNoUniqueSuffix: 'did_no_unique_suffix',
  DidUniqueSuffixFromInitialValuesMismatch: 'did_unique_suffix_from_initial_values_mismatch',
  DocumentIncorretEncodedFormat: 'document_incorrect_encoded_format',
  DocumentNotJson: 'document_not_json',
  DocumentNotValidOriginalDocument: 'document_not_valid_original_document',
  MapFileBatchFileHashMissingOrIncorrectType: 'map_file_batch_file_hash_missing_or_incorrect_type',
  MapFileDecompressionFailure: 'map_file_decompression_failure',
  MapFileHasUnknownProperty: 'map_file_has_unknown_property',
  MapFileNotJson: 'map_file_not_json',
  MultihashNotLatestSupportedHashAlgorithm: 'multihash_not_latest_supported_hash_algorithm',
  MultihashUnsupportedHashAlgorithm: 'multihash_unsupported_hash_algorithm',
  OperationCreateInvalidDidDocument: 'operation_create_invalid_did_document',
  OperationCountLessThanZero: 'operation_count_less_than_zero',
  OperationExceedsMaximumSize: 'operation_exceeds_maximum_size',
  OperationHeaderMissingOrIncorrectAlg: 'operation_header_missing_or_incorrect_alg',
  OperationHeaderMissingOrIncorrectKid: 'operation_header_missing_or_incorrect_kid',
  OperationHeaderMissingOrUnknownProperty: 'operation_header_missing_or_unknown_property',
  OperationMissingOrIncorrectSignature: 'operation_missing_or_incorrect_signature',
  OperationCreatePayloadHasMissingOrInvalidNextRecoveryOtpHash: 'operation_create_payload_has_missing_or_invalid_next_recovery_otp_hash',
  OperationCreatePayloadHasMissingOrInvalidNextUpdateOtpHash:  'operation_create_payload_has_missing_or_invalid_next_update_otp_hash',
  OperationCreatePayloadMissingOrUnknownProperty: 'operation_create_payload_missing_or_unknown_property',
  OperationPayloadMissingOrIncorrectType: 'operation_payload_missing_or_incorrect_type',
  OperationRecoverPayloadHasMissingOrInvalidDidDocument: 'operation_recover_payload_has_missing_or_invalid_did_document',
  OperationRecoverPayloadHasMissingOrInvalidDidUniqueSuffixType: 'operation_recover_payload_has_missing_or_invalid_did_unique_suffix_type',
  OperationRecoverPayloadHasMissingOrInvalidNextRecoveryOtpHash: 'operation_recover_payload_has_missing_or_invalid_next_recovery_otp_hash',
  OperationRecoverPayloadHasMissingOrInvalidNextUpdateOtpHash: 'operation_recover_payload_has_missing_or_invalid_next_update_otp_hash',
  OperationRecoverPayloadHasMissingOrInvalidRecoveryOtp: 'operation_recover_payload_has_missing_or_invalid_recovery_otp',
  OperationRecoverPayloadHasMissingOrUnknownProperty: 'operation_recover_payload_has_missing_or_unknown_property',
  OperationTypeUnknownOrMissing: 'operation_type_unknown_or_missing',
  OperationUpdatePayloadMissingOrInvalidDidUniqueSuffixType: 'operation_update_payload_missing_or_invalid_did_unique_suffix_type',
  OperationUpdatePayloadMissingOrInvalidNextUpdateOtpHash: 'operation_update_payload_missing_or_invalid_next_update_otp_hash',
  OperationUpdatePayloadMissingOrInvalidUpdateOtp: 'operation_update_payload_missing_or_invalid_update_otp',
  OperationUpdatePayloadMissingOrUnknownProperty: 'operation_update_payload_missing_or_unknown_property',
  OperationUpdatePatchesNotArray: 'operation_update_patches_not_array',
  OperationUpdatePatchMissingOrUnknownAction: 'operation_update_patch_missing_or_unknown_action',
  OperationUpdatePatchMissingOrUnknownProperty: 'operation_update_patch_missing_or_unknown_property',
  OperationUpdatePatchPublicKeyAddRecoveryKeyNotAllowed: 'operation_update_patch_public_key_add_recovery_key_not_allowed',
  OperationUpdatePatchPublicKeyControllerNotAllowed: 'operation_update_patch_public_key_controller_not_allowed',
  OperationUpdatePatchPublicKeyHexMissingOrIncorrect: 'operation_update_patch_public_key_hex_missing_or_incorrect',
  OperationUpdatePatchPublicKeyIdNotString: 'operation_update_patch_public_key_id_not_string',
  OperationUpdatePatchPublicKeyMissingOrUnknownProperty: 'operation_update_patch_public_key_missing_or_unknown_property',
  OperationUpdatePatchPublicKeysNotArray: 'operation_update_patch_public_keys_not_array',
  OperationUpdatePatchPublicKeyTypeMissingOrUnknown: 'operation_update_patch_public_key_type_missing_or_unknown',
  OperationUpdatePatchServiceEndpointNotString: 'operation_update_patch_service_endpoint_not_string',
  OperationUpdatePatchServiceEndpointsNotArray: 'operation_update_patch_service_endpoints_not_array',
  OperationUpdatePatchServiceTypeMissingOrUnknown: 'operation_update_patch_service_type_missing_or_unknown',
  QueueingMultipleOperationsPerDidNotAllowed: 'queueing_multiple_operations_per_did_not_allowed',
  TransactionFeePaidInvalid: 'transaction_fee_paid_is_invalid',
  TransactionFeePaidLessThanNormalizedFee: 'transaction_fee_paid_less_than_normalized_fee',
  TransactionsNotInSameBlock: 'transactions_not_in_same_block'
};
