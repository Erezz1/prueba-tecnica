export interface FetchProductsResponse {
  responseStatus: string
  responseMessage: string
  sortStrategy: string
  domainCode: string
  keyword: string
  item: Item
}

export interface Item {
  assetPrefix: string
  dynamicIds: string[]
  query: Query
  appGip: boolean
  buildId: string
  locale: string
  props: Props
  gip: boolean
  defaultLocale: string
  locales: string[]
  page: string
  isFallback: boolean
  customServer: boolean
  runtimeConfig: RuntimeConfig
  scriptLoader: any[]
}

export interface Query {
  query: string
  sort: string
  page: string
}

export interface Props {
  pageProps: PageProps
}

export interface PageProps {
  initialData: InitialData
  initialSearchQueryVariables: InitialSearchQueryVariables
  psych: Psych
  isomorphicSessionId: string
  trace: Trace
  isCaching: boolean
  queryContextCacheId: number
  bootstrapData: BootstrapData
  enableGqlCsrRedirect: boolean
  nonce: string
  persistedQueriesConfig: PersistedQueriesConfig
  enableWcpBeacon: boolean
  renderViewId: string
  dehydratedSearchCv: DehydratedSearchCv
  countryRegion: CountryRegion
  ssrTraceparent: string
  adSessionId: string
  overrideFSConfig: boolean
  excludeBeacon: boolean
  enableWcpBeaconDebug: boolean
  reqHost: string
  errorLoggingConfig: ErrorLoggingConfig
  isNextPublicMocksEnabled: boolean
  canValidateBeaconWithoutFiring: boolean
}

export interface InitialData {
  searchResult: SearchResult
  pageMetadata: PageMetadata2
  headers: Headers
  moduleDataByZone: ModuleDataByZone
  contentLayout: ContentLayout
  layoutContainerData: LayoutContainerData
}

export interface SearchResult {
  title: string
  aggregatedCount: number
  debug: Debug
  itemStacks: ItemStack[]
  pageMetadata: PageMetadata
  paginationV2: PaginationV2
  spelling: Spelling
  requestContext: RequestContext
  errorResponse: ErrorResponse
  count: number
  gridItemsCount: number
  catInfo: CatInfo
  nonProduct: any
  searchRedirect: SearchRedirect
  pac: any
  isModularSearch: boolean
  relatedSearch: RelatedSearch[]
  translation: Translation
  hasMorePages: boolean
  categoryNavigation: any[]
  enableFFAwareSearchBasedOnImplicitIntent: boolean
}

export interface Debug {
  sisUrl: string
  adsUrl: string
  genAIDebugInfo: GenAidebugInfo
  presoDebugInformation: PresoDebugInformation[]
}

export interface GenAidebugInfo {
  searchAlgorithm: string
  isGenAiQueryEligible: boolean
  genAIUnavailableReason: string
  reformulatedQuery: any
}

export interface PresoDebugInformation {
  explainerToolsResponse: any
}

export interface ItemStack {
  meta: Meta
  title: string
  totalItemCountDisplay: string
  count: number
  items: Item2[]
  layoutEnum: string
  subTitle: any
  queryUsedForSearchResults: any
  description: string
  content: any
  titleKey: string
}

export interface Meta {
  adsBeacon: AdsBeacon
  query: string
  stackId: number
  stackType: string
  title: string
  layoutEnum: string
  totalItemCount: number
  totalItemCountDisplay: string
  initialCount: number
  borderColor: any
  isPartialResult: boolean
  suppressTitle: boolean
  queryUsedForSearchResults: any
  stackName: string
  description: any
  titleKey: string
  spBeaconInfo: any
  beacon: string
  subTitle: any
  fulfillmentIntent: any
  comparisonCart: any
  iconUrl: any
}

export interface AdsBeacon {
  adUuid: string
  moduleInfo: string
  max_ads: number
  adSlots: any[]
}

export interface Item2 {
  __typename: string
  availabilityStatusDisplayValue?: string
  externalInfoUrl?: string
  canonicalUrl?: string
  canAddToCart?: boolean
  showOptions?: boolean
  description?: string
  flag?: string
  fulfillmentBadges?: any[]
  fulfillmentType?: string
  id?: string
  usItemId?: string
  image?: string
  isOutOfStock?: boolean
  name?: string
  price?: number
  preOrder?: PreOrder
  priceInfo?: PriceInfo
  rating?: Rating
  salesUnit?: string
  variantList?: VariantList[]
  isVariantTypeSwatch?: boolean
  brand?: string
  offerId?: string
  sellerId?: string
  sellerName?: string
  sponsoredProduct?: SponsoredProduct
  quickShop: any
  numberOfReviews?: number
  imageInfo?: ImageInfo
  type: string
  moqText: any
  specialBuy?: boolean
  pac: any
  priceFlip?: boolean
  buyNowEligible?: boolean
  earlyAccessEvent?: boolean
  preOrderBadge: any
  fulfillmentIcon?: FulfillmentIcon
  preEarlyAccessEvent?: boolean
  groupMetaData?: GroupMetaData
  petRx?: PetRx
  pglsCondition: any
  preownedCondition: any
  promoData?: any[]
  imageName?: string
  fulfillmentBadgeGroups?: FulfillmentBadgeGroup[]
  weightIncrement?: number
  itemStackPosition?: number
  shortDescription?: string
  isEarlyAccessItem?: boolean
  catalogProductType?: string
  fulfillmentTitle?: string
  buyBoxSuppression?: boolean
  vision?: Vision
  badge?: Badge
  blitzItem?: boolean
  socialProofBadges: any
  sellerType: any
  classType?: string
  annualEventV2?: boolean
  rewards: any
  isLeftSideGridItem?: boolean
  seeShippingEligibility?: boolean
  itemType: any
  topResult: any
  isPreowned?: boolean
  imageID?: string
  aspectInfo?: AspectInfo
  externalInfo: any
  variantCriteria?: VariantCriterum[]
  productLocation?: ProductLocation[]
  subscription?: Subscription
  isBadSplit?: boolean
  salesUnitType?: string
  seeSimilar?: boolean
  additionalOfferCount: any
  isSponsoredFlag?: boolean
  averageRating?: number
  arExperiences?: ArExperiences
  swipeableImages?: any[]
  fulfillmentSummary?: FulfillmentSummary[]
  hasCarePlans?: boolean
  imageSize?: string
  promoDiscount: any
  addOnServices: any
  groupsV2?: GroupsV2[]
  quickShopCTALabel: any
  availabilityInNearbyStore: any
  checkStoreAvailabilityATC?: boolean
  eventAttributes?: EventAttributes
  productIndex?: number
  showAtc?: boolean
  similarItems?: boolean
  newConditionProductId: any
  keyAttributes?: any[]
  returnPolicy?: ReturnPolicy
  annualEvent?: boolean
  itemBeacon?: string
  badges?: Badges
  snapEligible?: boolean
  conditionV2?: ConditionV2
  mhmdFlag?: boolean
  showBuyNow?: boolean
  showExploreOtherConditionsCTA?: boolean
  availabilityStatusV2?: AvailabilityStatusV2
  category?: Category
  shouldLazyLoad?: boolean
  productLocationDisplayValue?: string
  catalogSellerId?: string
  displayName?: string
  hasVideo?: boolean
  adUuid: any
  lazy?: string
  moduleInfo: any
  videoAdType: any
  moduleLocation?: string
  isAtfMarker?: boolean
}

export interface PreOrder {
  isPreOrder: boolean
  streetDateDisplayable: any
  streetDateType: any
  releaseDate: any
  streetDate: any
}

export interface PriceInfo {
  itemPrice: string
  linePrice: string
  wasPrice: string
  unitPrice: string
  shipPrice: string
  minPriceForVariant: string
  subscriptionPrice: string
  subscriptionString: string
  priceDisplayCondition: string
  finalCostByWeight: boolean
  submapType: string
  priceRangeString: string
  linePriceDisplay: string
  eaPricingPreText: string
  memberPriceString: string
  subscriptionPercentage: any
  savingsAmt: number
  minPrice: number
  savings: string
  subscriptionDualPrice: any
  eaPricingText: string
  isB2BPrice: boolean
}

export interface Rating {
  averageRating: number
  numberOfReviews: number
}

export interface VariantList {
  name: string
  swatchImageUrl: string
  image: string
  productId: string
  usItemId: string
  canonicalUrl: string
}

export interface SponsoredProduct {
  spQs: string
  clickBeacon: string
  spTags: any
  viewBeacon: any
}

export interface ImageInfo {
  id: string
  name: string
  thumbnailUrl: string
  size: string
  allImages: any[]
}

export interface FulfillmentIcon {
  key: string
  label: string
}

export interface GroupMetaData {
  groupType: any
  groupSubType: any
  numberOfComponents: number
  groupComponents: any
}

export interface PetRx {
  eligible: boolean
  singleDispense: any
}

export interface FulfillmentBadgeGroup {
  text: string
  slaText: string
  isSlaTextBold: boolean
  templates: any
  textTemplate: any
  textValues: any
  sla: any
  className: string
  key: string
}

export interface Vision {
  ageGroup: any
  visionCenterApproved: boolean
}

export interface Badge {
  __typename?: string
  key: string
  text: string
  type: string
  id: string
  styleId?: string
  bundleId?: string
}

export interface AspectInfo {
  name: any
  header: any
  id: any
  snippet: any
}

export interface VariantCriterum {
  name: string
  type: string
  id: any
  displayName: string
  isVariantTypeSwatch: boolean
  isVariantTypeAllowed: boolean
  variantList: VariantList2[]
}

export interface VariantList2 {
  id: any
  images: string[]
  name: string
  rank: number
  displayName: string
  swatchImageUrl?: string
  availabilityStatus: string
  products: string[]
  selectedProduct: SelectedProduct
}

export interface SelectedProduct {
  canonicalUrl: string
  usItemId: string
}

export interface ProductLocation {
  displayValue: string
  aisle: Aisle
}

export interface Aisle {
  zone: string
  aisle: number
}

export interface Subscription {
  __typename: string
  subscriptionEligible: boolean
  showSubscriptionCTA: boolean
}

export interface ArExperiences {
  isARHome: boolean
  isZeekit: boolean
  isAROptical: boolean
}

export interface FulfillmentSummary {
  fulfillment: string
  storeId: string
  deliveryDate?: string
  fulfillmentMethods: string[]
  fulfillmentBadge: any
}

export interface GroupsV2 {
  name: string
  flow: string
  pos: string
  members: Member[]
}

export interface Member {
  memType: string
  memId: string
  memStyleId: string
  fbMemStyleId: any
  content: Content[]
}

export interface Content {
  type: string
  value: string
  styleId: string
  fbStyleId: any
  contDesc: any
  url: any
  actionId: any
}

export interface EventAttributes {
  priceFlip: boolean
  specialBuy: boolean
}

export interface ReturnPolicy {
  returnable: any
  freeReturns: any
  returnWindow: ReturnWindow
  returnPolicyText: any
}

export interface ReturnWindow {
  value: any
  unitType: string
}

export interface Badges {
  flags?: Flag[]
  tags: Tag[]
  groups: Group[]
  groupsV2: GroupsV22[]
}

export interface Flag {
  __typename: string
  key: string
  text: string
  type: string
  id: string
  styleId: string
}

export interface Tag {
  __typename: string
  key: string
  text: string
  type: string
}

export interface Group {
  __typename: string
  name: string
  members: Member2[]
}

export interface Member2 {
  __typename: string
  id: string
  key: string
  memberType: string
  otherInfo: any
  rank: number
  textTemplate: any
  textValues: any
  slaText?: string
  slaDate: any
  slaDateISO: any
  sla: any
  styleId: string
  text: string
  type: string
  iconId: any
  templates: any
  badgeContent: any
}

export interface GroupsV22 {
  name: string
  flow: string
  pos: string
  members: Member3[]
}

export interface Member3 {
  memType: string
  memId: string
  memStyleId: string
  fbMemStyleId: any
  content: Content2[]
}

export interface Content2 {
  type: string
  value: string
  styleId: string
  fbStyleId: any
  contDesc: any
  url: any
  actionId: any
}

export interface ConditionV2 {
  code: number
  groupCode: number
}

export interface AvailabilityStatusV2 {
  display: string
  value: string
}

export interface Category {
  categoryPathId: string
  path: any
}

export interface PageMetadata {
  title: string
  storeSelectionHeader: any
  location: Location
  categoryNavigationMetaData: any
  source: string
  subscriptionEligible: boolean
}

export interface Location {
  addressId: string
}

export interface PaginationV2 {
  maxPage: number
  pageProperties: PageProperties
}

export interface PageProperties {
  ps: string
  spelling: string
  stores: string
  grid: string
  query: string
  cat_id: string
  sort: string
  displayGuidedNav: boolean
  affinityOverride: string
  pageType: string
  itemStacksInterleavePosition: ItemStacksInterleavePosition[]
  prg: string
  page: number
  itemStacks: ItemStacks
  department: string
  pap: Pap
}

export interface ItemStacksInterleavePosition {
  stackId: number
}

export interface ItemStacks {
  "134283827": N134283827
  "143905497": N143905497
  "438553587": N438553587
  "456793072": N456793072
  "476043359": N476043359
  "527595166": N527595166
  "617677506": N617677506
  "821989158": N821989158
  "905532718": N905532718
  "924327152": N924327152
  "1177112653": N1177112653
  "1292911527": N1292911527
  "1378075482": N1378075482
  "2697173249": N2697173249
  "2832686320": N2832686320
  "3367378489": N3367378489
  "3684586249": N3684586249
  "5150430167": N5150430167
  "5478063184": N5478063184
  "5420259251": N5420259251
  "5038387171": N5038387171
  "10513808218": N10513808218
  "5599461491": N5599461491
  "5304449947": N5304449947
  "5459408521": N5459408521
  "11822909786": N11822909786
  "5249661628": N5249661628
  "10601801571": N10601801571
  "5378440133": N5378440133
  "5692073389": N5692073389
  "5217249047": N5217249047
  "5322740755": N5322740755
  "11617854945": N11617854945
  "5454069076": N5454069076
  "7708815179": N7708815179
  "5203728818": N5203728818
  "7161210812": N7161210812
  "5358367002": N5358367002
  "5402312158": N5402312158
  "11693554468": N11693554468
  "5349745492": N5349745492
  "5373842587": N5373842587
  "5482281534": N5482281534
  "5537424302": N5537424302
  "9609967335": N9609967335
  "5038357992": N5038357992
  "13115060996": N13115060996
  "5080127951": N5080127951
  "11656223969": N11656223969
  "13839258493": N13839258493
}

export interface N134283827 {
  usItemId: string
}

export interface N143905497 {
  usItemId: string
}

export interface N438553587 {
  usItemId: string
}

export interface N456793072 {
  usItemId: string
}

export interface N476043359 {
  usItemId: string
}

export interface N527595166 {
  usItemId: string
}

export interface N617677506 {
  usItemId: string
}

export interface N821989158 {
  usItemId: string
}

export interface N905532718 {
  usItemId: string
}

export interface N924327152 {
  usItemId: string
}

export interface N1177112653 {
  usItemId: string
}

export interface N1292911527 {
  usItemId: string
}

export interface N1378075482 {
  usItemId: string
}

export interface N2697173249 {
  usItemId: string
}

export interface N2832686320 {
  usItemId: string
}

export interface N3367378489 {
  usItemId: string
}

export interface N3684586249 {
  usItemId: string
}

export interface N5150430167 {
  usItemId: string
}

export interface N5478063184 {
  usItemId: string
}

export interface N5420259251 {
  usItemId: string
}

export interface N5038387171 {
  usItemId: string
}

export interface N10513808218 {
  usItemId: string
}

export interface N5599461491 {
  usItemId: string
}

export interface N5304449947 {
  usItemId: string
}

export interface N5459408521 {
  usItemId: string
}

export interface N11822909786 {
  usItemId: string
}

export interface N5249661628 {
  usItemId: string
}

export interface N10601801571 {
  usItemId: string
}

export interface N5378440133 {
  usItemId: string
}

export interface N5692073389 {
  usItemId: string
}

export interface N5217249047 {
  usItemId: string
}

export interface N5322740755 {
  usItemId: string
}

export interface N11617854945 {
  usItemId: string
}

export interface N5454069076 {
  usItemId: string
}

export interface N7708815179 {
  usItemId: string
}

export interface N5203728818 {
  usItemId: string
}

export interface N7161210812 {
  usItemId: string
}

export interface N5358367002 {
  usItemId: string
}

export interface N5402312158 {
  usItemId: string
}

export interface N11693554468 {
  usItemId: string
}

export interface N5349745492 {
  usItemId: string
}

export interface N5373842587 {
  usItemId: string
}

export interface N5482281534 {
  usItemId: string
}

export interface N5537424302 {
  usItemId: string
}

export interface N9609967335 {
  usItemId: string
}

export interface N5038357992 {
  usItemId: string
}

export interface N13115060996 {
  usItemId: string
}

export interface N5080127951 {
  usItemId: string
}

export interface N11656223969 {
  usItemId: string
}

export interface N13839258493 {
  usItemId: string
}

export interface Pap {
  polaris: Polaris
}

export interface Polaris {
  ms_max_page_within_rerank: number
  ms_slp: number
  ms_triggered: boolean
}

export interface Spelling {
  spellingModule: any
}

export interface RequestContext {
  isFitmentFilterQueryApplied: boolean
  searchMatchType: string
  categories: Categories
  showComparisonCart: boolean
  hasGicIntent: boolean
  selectedFacetCount: number
  vertical: string
}

export interface Categories {
  id: string
  name: string
}

export interface ErrorResponse {
  correlationId: string
  source: string
  errors: any[]
  errorCodes: any
}

export interface CatInfo {
  name: string
  catId: string
}

export interface SearchRedirect {
  redirectUrl: any
}

export interface RelatedSearch {
  title: string
  url: string
  imageUrl: string
}

export interface Translation {
  metadata: Metadata
  translationModule: TranslationModule
}

export interface Metadata {
  originalQuery: string
  translatedQuery: string
  isTranslated: boolean
  translationOfferType: string
  moduleSource: string
}

export interface TranslationModule {
  title: string
  urlLinkText: string
  originalQueryUrl: string
}

export interface PageMetadata2 {
  location: Location2
  pageContext: PageContext
}

export interface Location2 {
  postalCode: string
  stateOrProvinceCode: string
  city: string
  storeId: string
  accessType: any
  pickupStore: string
  deliveryStore: string
  accessPointId: any
  spokeNodeId: any
  intent: string
}

export interface PageContext {
  searchNormalize: SearchNormalize
  customerContext: CustomerContext
}

export interface SearchNormalize {
  normalized_query: string
  original_query: string
  rewritten_query: string
  specificity: string
  top_query_cat_path: string
  top_query_cat_path_name: string
  analytics_log: AnalyticsLog
  verticalId: string
  product_type: ProductType[]
  productTypeSpecificityScore: ProductTypeSpecificityScore
  specificityScore: SpecificityScore
}

export interface AnalyticsLog {
  fe_log: FeLog
}

export interface FeLog {
  dept: string
  g: string
  s: string
  trf: string
  msf: number
  ms: number
  sps: number
  mso: number
  tpt: string
  tkc: number
  pts: string
  msov: number
}

export interface ProductType {
  name: string
  score: number
  source: string
}

export interface ProductTypeSpecificityScore {
  score: number
  quantile: number
}

export interface SpecificityScore {
  score: number
  quantile: number
}

export interface CustomerContext {
  customerId: any
  isPaidMember: boolean
  isActiveMember: boolean
  purseTags: any[]
  paymentMethodMetaData: any[]
}

export interface Headers {}

export interface ModuleDataByZone {
  pillsTopZone: PillsTopZone
  bottomZone1: BottomZone1
  topZone3: TopZone3
  topZone1: TopZone1
  topZone2: TopZone2
  topZone5: TopZone5
  topZone6: TopZone6
  bottomZone2: BottomZone2
  INVALID: Invalid
}

export interface PillsTopZone {
  __typename: string
  type: string
  name: string
  version: number
  moduleId: string
  schedule: Schedule
  matchedTrigger: MatchedTrigger
  configs: Configs
}

export interface Schedule {
  priority: number
}

export interface MatchedTrigger {
  zone: string
}

export interface Configs {
  __typename: string
  moduleSource: string
  pillsV2: any
}

export interface BottomZone1 {
  __typename: string
  type: string
  name: string
  version: number
  moduleId: string
  schedule: Schedule2
  matchedTrigger: MatchedTrigger2
  configs: Configs2
}

export interface Schedule2 {
  priority: number
}

export interface MatchedTrigger2 {
  zone: string
}

export interface Configs2 {
  __typename: string
  _rawConfigs: RawConfigs
  ad: any
}

export interface RawConfigs {
  moduleLocation: string
  lazy: string
}

export interface TopZone3 {
  __typename: string
  type: string
  name: string
  version: number
  moduleId: string
  schedule: Schedule3
  matchedTrigger: MatchedTrigger3
  configs: Configs3
}

export interface Schedule3 {
  priority: number
}

export interface MatchedTrigger3 {
  zone: string
}

export interface Configs3 {
  __typename: string
  topNavFacets: TopNavFacet[]
  allSortAndFilterFacets: AllSortAndFilterFacet[]
  sortByColor: any
}

export interface TopNavFacet {
  title: string
  name: string
  expandOnLoad?: boolean
  type: string
  displayType: string
  urlParams: any
  layout: string
  min?: number
  max?: number
  selectedMin: any
  selectedMax: any
  unboundedMax?: boolean
  stepSize?: number
  isSelected: any
  values?: Value[]
}

export interface Value {
  id: string
  title: string
  name: string
  expandOnLoad: boolean
  description: any
  type: any
  itemCount: number
  isSelected: any
  baseSeoURL: any
  values: any
}

export interface AllSortAndFilterFacet {
  title: string
  name: string
  expandOnLoad?: boolean
  type: string
  displayType: any
  urlParams: any
  layout: string
  min?: number
  max?: number
  selectedMin: any
  selectedMax: any
  unboundedMax?: boolean
  stepSize?: number
  isSelected: any
  values?: Value2[]
}

export interface Value2 {
  id: string
  title: string
  name: string
  expandOnLoad: boolean
  description: any
  type?: string
  itemCount?: number
  isSelected?: boolean
  baseSeoURL?: string
  values: any
}

export interface TopZone1 {
  __typename: string
  type: string
  name: string
  version: number
  moduleId: string
  schedule: Schedule4
  matchedTrigger: MatchedTrigger4
  configs: Configs4
}

export interface Schedule4 {
  priority: number
}

export interface MatchedTrigger4 {
  zone: string
}

export interface Configs4 {
  __typename: string
  _rawConfigs: RawConfigs2
  ad: any
}

export interface RawConfigs2 {
  moduleLocation: string
  lazy: string
}

export interface TopZone2 {
  __typename: string
  type: string
  name: string
  version: number
  moduleId: string
  schedule: Schedule5
  matchedTrigger: MatchedTrigger5
  configs: Configs5
}

export interface Schedule5 {
  priority: number
}

export interface MatchedTrigger5 {
  zone: string
}

export interface Configs5 {
  __typename: string
  _rawConfigs: RawConfigs3
  moduleLocation: string
  ad: Ad
}

export interface RawConfigs3 {
  moduleLocation: string
  lazy: any
}

export interface Ad {
  status: string
  moduleType: string
  platform: string
  pageId: string
  pageType: string
  storeId: string
  stateCode: string
  zipCode: string
  pageContext: PageContext2
  moduleConfigs: ModuleConfigs
  adsContext: AdsContext
  adRequestComposite: AdRequestComposite
  adContent: AdContent
}

export interface PageContext2 {
  searchNormalize: SearchNormalize2
  customerContext: CustomerContext2
}

export interface SearchNormalize2 {
  verticalId: string
  normalized_query: string
  original_query: string
  specificityScore: SpecificityScore2
  productTypeSpecificityScore: ProductTypeSpecificityScore2
  rewritten_query: string
  specificity: string
  top_query_cat_path: string
  top_query_cat_path_name: string
  product_type: ProductType2[]
  analytics_log: AnalyticsLog2
}

export interface SpecificityScore2 {
  score: number
  quantile: number
}

export interface ProductTypeSpecificityScore2 {
  score: number
  quantile: number
}

export interface ProductType2 {
  name: string
  score: number
  source: string
}

export interface AnalyticsLog2 {
  fe_log: FeLog2
}

export interface FeLog2 {
  tkc: number
  dept: string
  g: string
  s: string
  trf: string
  tpt: string
  pts: string
  sps: number
  mso: number
  msf: number
  msov: number
  ms: number
}

export interface CustomerContext2 {
  customerId: any
  isPaidMember: boolean
  isActiveMember: boolean
  purseTags: any[]
  paymentMethodMetaData: any[]
}

export interface ModuleConfigs {
  moduleLocation: string
  lazy: any
}

export interface AdsContext {
  locationContext: LocationContext
  itemId: string
  categoryId: string
  categoryName: string
  brand: string
  productName: string
  productTypeId: string
  normKeyword: string
  verticalId: string
  dedupeList: string[]
}

export interface LocationContext {
  zipCode: string
  stateCode: string
  storeId: string
  pickupStore: string
  deliveryStore: string
  intent: string
  incatchment: boolean
}

export interface AdRequestComposite {
  adsConfig: string
  categoryId: string
  facets: string
  keyword: string
  isDebug: boolean
  isManualShelf: boolean
}

export interface AdContent {
  type: string
  data: any
}

export interface TopZone5 {
  __typename: string
  type: string
  name: string
  version: number
  moduleId: string
  schedule: Schedule6
  matchedTrigger: MatchedTrigger6
  configs: Configs6
}

export interface Schedule6 {
  priority: number
}

export interface MatchedTrigger6 {
  zone: string
}

export interface Configs6 {
  __typename: string
  fitments: any
}

export interface TopZone6 {
  __typename: string
  type: string
  name: string
  version: number
  moduleId: string
  schedule: Schedule7
  matchedTrigger: MatchedTrigger7
  configs: Configs7
}

export interface Schedule7 {
  priority: number
}

export interface MatchedTrigger7 {
  zone: string
}

export interface Configs7 {
  __typename: string
  title: any
  subTitle: any
  urlLinkText: any
  url: any
}

export interface BottomZone2 {
  __typename: string
  type: string
  name: string
  version: number
  moduleId: string
  schedule: Schedule8
  matchedTrigger: MatchedTrigger8
  configs: Configs8
}

export interface Schedule8 {
  priority: number
}

export interface MatchedTrigger8 {
  zone: string
}

export interface Configs8 {
  __typename: string
  _rawConfigs: RawConfigs4
}

export interface RawConfigs4 {
  title: string
  moduleLocation: string
  lazy: string
}

export interface Invalid {
  __typename: string
  type: string
  name: string
  version: number
  moduleId: string
  schedule: Schedule9
  matchedTrigger: MatchedTrigger9
  configs: Configs9
}

export interface Schedule9 {
  priority: number
}

export interface MatchedTrigger9 {
  zone: string
}

export interface Configs9 {
  __typename: string
  zoneV1: ZoneV1[]
}

export interface ZoneV1 {
  moduleId: string
  zone: string
  isP13nBtfModule: boolean
  isNativeLazyLoaded: boolean
}

export interface ContentLayout {
  modules: Module[]
  layouts: Layout[]
  pageMetadata: PageMetadata3
}

export interface Module {
  __typename: string
  type: string
  name: string
  version: number
  moduleId: string
  schedule: Schedule10
  matchedTrigger: MatchedTrigger10
  configs: Configs10
}

export interface Schedule10 {
  priority: number
}

export interface MatchedTrigger10 {
  zone: string
}

export interface Configs10 {
  __typename: string
  moduleSource?: string
  pillsV2: any
  _rawConfigs?: RawConfigs5
  ad?: Ad2
  topNavFacets?: TopNavFacet2[]
  allSortAndFilterFacets?: AllSortAndFilterFacet2[]
  sortByColor: any
  moduleLocation?: string
  fitments: any
  title: any
  subTitle: any
  urlLinkText: any
  url: any
  zoneV1?: ZoneV12[]
}

export interface RawConfigs5 {
  title?: string
  moduleLocation: string
  lazy?: string
}

export interface Ad2 {
  status: string
  moduleType: string
  platform: string
  pageId: string
  pageType: string
  storeId: string
  stateCode: string
  zipCode: string
  pageContext: PageContext3
  moduleConfigs: ModuleConfigs2
  adsContext: AdsContext2
  adRequestComposite: AdRequestComposite2
  adContent: AdContent2
}

export interface PageContext3 {
  searchNormalize: SearchNormalize3
  customerContext: CustomerContext3
}

export interface SearchNormalize3 {
  verticalId: string
  normalized_query: string
  original_query: string
  specificityScore: SpecificityScore3
  productTypeSpecificityScore: ProductTypeSpecificityScore3
  rewritten_query: string
  specificity: string
  top_query_cat_path: string
  top_query_cat_path_name: string
  product_type: ProductType3[]
  analytics_log: AnalyticsLog3
}

export interface SpecificityScore3 {
  score: number
  quantile: number
}

export interface ProductTypeSpecificityScore3 {
  score: number
  quantile: number
}

export interface ProductType3 {
  name: string
  score: number
  source: string
}

export interface AnalyticsLog3 {
  fe_log: FeLog3
}

export interface FeLog3 {
  tkc: number
  dept: string
  g: string
  s: string
  trf: string
  tpt: string
  pts: string
  sps: number
  mso: number
  msf: number
  msov: number
  ms: number
}

export interface CustomerContext3 {
  customerId: any
  isPaidMember: boolean
  isActiveMember: boolean
  purseTags: any[]
  paymentMethodMetaData: any[]
}

export interface ModuleConfigs2 {
  moduleLocation: string
  lazy: any
}

export interface AdsContext2 {
  locationContext: LocationContext2
  itemId: string
  categoryId: string
  categoryName: string
  brand: string
  productName: string
  productTypeId: string
  normKeyword: string
  verticalId: string
  dedupeList: string[]
}

export interface LocationContext2 {
  zipCode: string
  stateCode: string
  storeId: string
  pickupStore: string
  deliveryStore: string
  intent: string
  incatchment: boolean
}

export interface AdRequestComposite2 {
  adsConfig: string
  categoryId: string
  facets: string
  keyword: string
  isDebug: boolean
  isManualShelf: boolean
}

export interface AdContent2 {
  type: string
  data: any
}

export interface TopNavFacet2 {
  title: string
  name: string
  expandOnLoad?: boolean
  type: string
  displayType: string
  urlParams: any
  layout: string
  min?: number
  max?: number
  selectedMin: any
  selectedMax: any
  unboundedMax?: boolean
  stepSize?: number
  isSelected: any
  values?: Value3[]
}

export interface Value3 {
  id: string
  title: string
  name: string
  expandOnLoad: boolean
  description: any
  type: any
  itemCount: number
  isSelected: any
  baseSeoURL: any
  values: any
}

export interface AllSortAndFilterFacet2 {
  title: string
  name: string
  expandOnLoad?: boolean
  type: string
  displayType: any
  urlParams: any
  layout: string
  min?: number
  max?: number
  selectedMin: any
  selectedMax: any
  unboundedMax?: boolean
  stepSize?: number
  isSelected: any
  values?: Value4[]
}

export interface Value4 {
  id: string
  title: string
  name: string
  expandOnLoad: boolean
  description: any
  type?: string
  itemCount?: number
  isSelected?: boolean
  baseSeoURL?: string
  values: any
}

export interface ZoneV12 {
  moduleId: string
  zone: string
  isP13nBtfModule: boolean
  isNativeLazyLoaded: boolean
}

export interface Layout {
  id: string
  layout: Layout2
}

export interface Layout2 {
  type: string
  name: string
  definition: Definition
  channel: Channel
  status: string
  version: string
}

export interface Definition {
  type: string
  flow: string
  content: Content3[]
}

export interface Content3 {
  flow: string
  type: string
  content: Content4
}

export interface Content4 {
  id: string
  type: string
  mapping: Mapping[]
}

export interface Mapping {
  type: string
  options: Options
}

export interface Options {
  refId: string
  tempoLabel?: string
  displayInTempo?: boolean
}

export interface Channel {
  id: string
  status: string
}

export interface PageMetadata3 {
  location: Location3
  pageContext: PageContext4
}

export interface Location3 {
  pickupStore: string
  deliveryStore: string
  intent: string
  postalCode: string
  stateOrProvinceCode: string
  city: string
  storeId: string
  accessPointId: any
  accessType: any
  spokeNodeId: any
}

export interface PageContext4 {
  searchNormalize: SearchNormalize4
  customerContext: CustomerContext4
}

export interface SearchNormalize4 {
  verticalId: string
  normalized_query: string
  original_query: string
  specificityScore: SpecificityScore4
  productTypeSpecificityScore: ProductTypeSpecificityScore4
  rewritten_query: string
  specificity: string
  top_query_cat_path: string
  top_query_cat_path_name: string
  product_type: ProductType4[]
  analytics_log: AnalyticsLog4
}

export interface SpecificityScore4 {
  score: number
  quantile: number
}

export interface ProductTypeSpecificityScore4 {
  score: number
  quantile: number
}

export interface ProductType4 {
  name: string
  score: number
  source: string
}

export interface AnalyticsLog4 {
  fe_log: FeLog4
}

export interface FeLog4 {
  tkc: number
  dept: string
  g: string
  s: string
  trf: string
  tpt: string
  pts: string
  sps: number
  mso: number
  msf: number
  msov: number
  ms: number
}

export interface CustomerContext4 {
  customerId: any
  isPaidMember: boolean
  isActiveMember: boolean
  purseTags: any[]
  paymentMethodMetaData: any[]
}

export interface LayoutContainerData {
  type: string
  flow: string
  content: Content5[]
}

export interface Content5 {
  flow: string
  type: string
  content: Content6
}

export interface Content6 {
  id: string
  type: string
  mapping: Mapping2[]
}

export interface Mapping2 {
  type: string
  options: Options2
}

export interface Options2 {
  refId: string
  tempoLabel?: string
  displayInTempo?: boolean
}

export interface InitialSearchQueryVariables {
  id: string
  dealsId: string
  query: string
  page: number
  prg: string
  facet: string
  sort: string
  rawFacet: string
  seoPath: string
  ps: number
  ptss: string
  trsp: string
  beShelfId: string
  recall_set: string
  module_search: string
  min_price: string
  max_price: string
  storeSlotBooked: string
  fitmentFieldParams: FitmentFieldParams
  fitmentSearchParams: FitmentSearchParams
  fetchMarquee: boolean
  fetchSkyline: boolean
  fetchSbaTop: boolean
  enableIsFreeWarranty: boolean
  enableItemLimits: boolean
  enableInStoreShelfMessage: boolean
  fetchGallery: boolean
  enableFashionTopNav: boolean
  nudgeContext: string
  fetchDac: boolean
  enableFacetCount: boolean
  fetchSBAV1: boolean
  enableCanAddToList: boolean
  enableSellerType: boolean
  enableAdsPromoData: boolean
  limit: number
  enableRelatedSearches: boolean
  enableCachingOnEmptyResultsForBrowseAndSearch: boolean
  enablePortableFacets: boolean
  tenant: string
  enablePromoData: boolean
  enableShopSimilarBottomSheet: boolean
  enableMultiSave: boolean
  enableRxDrugScheduleModal: boolean
  enableAdditionalSearchDepartmentAnalytics: boolean
  enablePromotionMessages: boolean
  enableFulfillmentTagsEnhacements: boolean
  catId: string
  ffAwareSearchOptOut: boolean
  searchArgs: SearchArgs2
  additionalQueryParams: AdditionalQueryParams2
  enableSignInToSeePrice: boolean
}

export interface FitmentFieldParams {
  powerSportEnabled: boolean
  dynamicFitmentEnabled: boolean
  extendedAttributesEnabled: boolean
  fuelTypeEnabled: boolean
}

export interface FitmentSearchParams {
  id: string
  dealsId: string
  query: string
  page: number
  prg: string
  facet: string
  sort: string
  rawFacet: string
  seoPath: string
  ps: number
  ptss: string
  trsp: string
  recall_set: string
  module_search: string
  min_price: string
  max_price: string
  storeSlotBooked: string
  cat_id: string
  _be_shelf_id: string
  catId: string
  ffAwareSearchOptOut: boolean
  limit: number
  beShelfId: string
  searchArgs: SearchArgs
  nudgeContext: string
  additionalQueryParams: AdditionalQueryParams
}

export interface SearchArgs {
  query: string
  cat_id: string
  prg: string
  facet: string
}

export interface AdditionalQueryParams {
  hidden_facet: any
  translation: any
  isMoreOptionsTileEnabled: boolean
  isGenAiEnabled: boolean
  rootDimension: string
  altQuery: string
  selectedFilter: string
}

export interface SearchArgs2 {
  query: string
  cat_id: string
  prg: string
  facet: string
}

export interface AdditionalQueryParams2 {
  hidden_facet: any
  translation: any
  isMoreOptionsTileEnabled: boolean
  isGenAiEnabled: boolean
  rootDimension: string
  altQuery: string
  selectedFilter: string
}

export interface Psych {
  isMobile: boolean
  isBot: boolean
  isDesktop: boolean
  isAkamaiBot: string
  trafficType: string
  browserName: string
  previousAppVersion: string
  visitType: string
}

export interface Trace {
  traceId: string
  spanId: string
  traceFlags: number
}

export interface BootstrapData {
  account: Account
  header: Header
  footer: Footer
  cv: Cv
  shippingCountryCode: ShippingCountryCode
  membership: Membership
}

export interface Account {
  data: Data
}

export interface Data {}

export interface Header {
  data: Data2
  headers: Headers2
}

export interface Data2 {
  contentLayout: ContentLayout2
}

export interface ContentLayout2 {
  modules: any[]
}

export interface Headers2 {}

export interface Footer {
  data: Data3
  headers: Headers3
}

export interface Data3 {
  contentLayout: ContentLayout3
}

export interface ContentLayout3 {
  modules: Module2[]
}

export interface Module2 {
  name: string
  type: string
  matchedTrigger: MatchedTrigger11
  configs: Configs11
}

export interface MatchedTrigger11 {
  zone: string
}

export interface Configs11 {
  subLinks: SubLink[]
}

export interface SubLink {
  link: Link
  isSFLink: string
  openInNewTab: string
}

export interface Link {
  linkText: string
  title: string
  clickThrough: ClickThrough
  uid: string
}

export interface ClickThrough {
  type: string
  value: string
  rawValue: string
}

export interface Headers3 {}

export interface Cv {
  account: Account2
  cart: Cart
  bookslot: Bookslot
  header: Header2
  pulse: Pulse
  footer: Footer2
  shared: Shared
  ads: Ads
  wplus: Wplus
  amends: Amends
  search: Search
  identity: Identity
}

export interface Account2 {
  _all_: All
}

export interface All {
  vuduLibraryUrl: string
  registriesUrl: string
  enableGoogleAutoComplete: boolean
  enableMyItemsMenu: boolean
  enablePostalCodeMessage: boolean
  enableLocationAutoComplete: boolean
  eBookUrl: string
  enableAccountWallet: boolean
  isInHomeEnabled: boolean
  enableAccountMWeb: boolean
  walmartPlusUrl: string
  enablePostalCodeOnly: boolean
  listsUrl: string
  placeholder: number
  enableWalmartPlus: boolean
  communicationAndPrivacyUrl: string
  enableWalmartPlusPreference: boolean
  walmartAssociateUrl: string
  pharmacyUrl: string
  enableFeatureCommsAndPrivacy: boolean
  protectionPlanUrl: string
  reorderUrl: string
  enableAvsOverride: boolean
  shouldUpdateCartAfterUpdateZipcode: boolean
  isFCShippingEnabled: boolean
  enableInHomeAddress: boolean
  hideInvoiceAddressForeignSection: boolean
  hideMobileVerificationNotNowLink: boolean
  isLoginRedirectionEnabled: boolean
  enableRemovePWState: boolean
  enableAffirmBanner: boolean
  enablePetsCarousel: boolean
  ccpaUrl: string
  enableCommsPreference: boolean
  uTypeValue: string
  enableUpdateLanguagePreference: boolean
  enableProfilePhoneVerificationV2: boolean
  enableInHomeCommsCopy: boolean
  enableGEPAddress: boolean
  enableZipcodeInAddressSelector: boolean
  enableFashionVTO: boolean
  disablePRAutoComplete: boolean
  customCakeUrl: string
  enableLanguageSelection: boolean
  enableDigitalRewards: boolean
  enableChileAddress: boolean
  enableShowGuidedDeliveryInstruction: boolean
  enableCommunicationLanguagePref: boolean
  enablePreferredAddress: boolean
  enableCashiLinkingPageV2: boolean
  enableLocationErrorMessageImprovement: boolean
  enableWCPCreditCardForm: boolean
  enchancedAccountPharmacyUrl: string
  enableItemSubscriptionRamp: boolean
  skipPhoneVerification: boolean
  ccpaNewRequestUrl: string
  enableAddressValidationErrorPopupUpdate: boolean
  enablePhoneVerificationPage: boolean
  hideGdiPhaseTwoFromCart: boolean
  autoCareCenterUrl: string
  enablePhoneCollection: boolean
  hideAbandonedCartPref: boolean
  enablePetRxAwarenessBanner: boolean
  enablePetRxVetInitiated: boolean
  vetSearchLimitsEnabled: boolean
  shouldSendCountryField: boolean
  enableAddressAutoFill: boolean
  enableMyMembership: boolean
  enableHealthPreferences: boolean
  enableNextBestAction: boolean
  enableAVSOverrideGoogleAutoComplete: boolean
  enableSubscriptionModule: boolean
  enableWCPDeliveryAddressPage: boolean
  enableRemoveRegistryAlert: boolean
  enableRecipeLinkNewTag: boolean
  enableMemberModePersonalization: boolean
  enableEnrichedAddressSuggestions: boolean
  showSignInNudgeMWeb: boolean
  enableFitPredictor: boolean
  enableYourProfileSection: boolean
  vetMaxLimitSearch: number
  rxRenewalsOrderLimit: number
  enableGarage: boolean
  itemSubscriptionUrl: string
  disableAddressOnInvalidData: boolean
  enableGuidedDeliveryAddressForCart: boolean
  hideWalmartRewardsHeading: boolean
  enableShowDeliveryInstruction: boolean
  enableAccountApiOptimization: boolean
  isSignInWithOtpDisabled: boolean
  gmapDistanceThreshold: number
  renameShippingToDelivery: boolean
  enablePhoneNumberOnPersonalInfo: boolean
  enableUseFormattedAddress: boolean
  enableItemSubscription: boolean
  isRewardsEnabled: boolean
  enableNonMemberAccountTempoModule: boolean
  hideIntegratedPrivacyPolicy: boolean
  enableGEPCHLMX: boolean
  hidePersonalInfo: boolean
  enableAccountDWeb: boolean
  enablePaidBusinessPlusPlan: boolean
  enableCountryCallingCode: boolean
  enableRecipeLink: boolean
  enableSkyNewProgramLink: boolean
  vetNameCharacterLimit: number
  isTempoEnabled: boolean
  enableWPlusMembershipMode: boolean
  enableFashionLinkNewTag: boolean
  enableMultipleInHomeAddresses: boolean
  enableMembershipQueryAccountLanding: boolean
  enablePetProfileComplianceChanges: boolean
  enableGuidedDeliveryPhase2: boolean
  showSignInNudgeDweb: boolean
  enableNonMemberWPlusBanner: boolean
  hideWalletSubsectionForCCA: boolean
  enablePrivacyMenu: boolean
  enableTaxExemptRedesign: boolean
  hideRegistries: boolean
  vetSearchWarningLimit: number
  enablePetRxVirtualPack: boolean
  hideWPlusBenefitsDweb: boolean
  enableDeliveryInstructionv2: boolean
  digitalRewardsUrl: string
  disableGuestUserAutocomplete: boolean
  enableEbtFraud: boolean
  enablePhoneVerificationV2: boolean
  enableAddressSingleSuggested: boolean
  enableTEDoorway: boolean
  showBankAccountPage: boolean
  enablePetsLink: boolean
  enableValueTracker: boolean
  enableGEPCHLCO: boolean
  skipMembershipCheckForAccountDeletion: boolean
  enableRegistry: boolean
  businessMaximumNumberOfUserToInvite: number
  enableAddressLineOneAutofill: boolean
  enableCharityOfChoice: boolean
  enableHSAFSA: boolean
  disablePersonalInfoRequestsLink: boolean
  enableGdiForAllAddressPages: boolean
  enablePetHubPage: boolean
  disablePrivacyPolicyLinks: boolean
  enableEditInHomeAddress: boolean
  enableSpendAnalyzer: boolean
  enableInHomeLocationPreference: boolean
  hidePrivacyPolicy: boolean
  enablePetRxWebUrl: string
  enablePartialFulfillmentSwitching: boolean
  enableOST: boolean
  enableInHomeEdit: boolean
  enableGuidedDeliveryFastFollow: boolean
  geoFenceRadiusInMeter: number
  enableDeviceLocation: boolean
  clinicNameCharacterLimit: number
  fetchColoniesFromGoogleService: boolean
  enableAccountResilientErrorPage: boolean
  hidePurchasedProtectionPlans: boolean
  enableVisualOrderTracker: boolean
  enablePetRxAutoRefill: boolean
  enableAccountUxOptimization: boolean
  enableEGiftCardLinkFix: boolean
  showAddAddressCTAforGuestUser: boolean
  enableFashionLink: boolean
  enablePetRx: boolean
  disableAddressOnEmptyLatLong: boolean
  enablePhoneVerificationPageV2: boolean
  enableInHomeKeepPreferenceOrNotEligible: boolean
  isMobileVerificationEnabled: boolean
  enableAccountMenuOptimization: boolean
  enableAccountReviewLinkNewTag: boolean
  enablePetRxRenewals: boolean
}

export interface Cart {
  _all_: All2
}

export interface All2 {
  enableOmniPromise: boolean
  enableWirelessPostpaid: boolean
  enableCapOne: boolean
  sflCountPerPagination: number
  enableFulfillmentHeadersV2: boolean
  enablePartialCheckout: boolean
  enableItemSwitchableBadge: boolean
  enableInHomeDelivery: boolean
  enableLastCall: boolean
  enableATCOptimization: boolean
  enablePAC: boolean
  enableGXOSignInNudge: boolean
  enableSigninBenefits: boolean
  enableCapOneRewards: boolean
  enableWplusFulfillmentBanner: boolean
  enableGuestCheckout: boolean
  enablePartialSwitchModuleLevel: boolean
  initialSFLCount: number
  enableAffirm: boolean
  enableItemNotSwitchableBadge: boolean
  enableEbt: boolean
  enableWplus: boolean
  enableSFL: boolean
  enableCXOPrefetch: boolean
  enableItemSwitchableTempBadge: boolean
  enableRegistry: boolean
  enableStoreSnackBarMessage: boolean
  enableShippingIntent: boolean
  enableItemUpdates: boolean
  enableMultipleGroupMessage: boolean
  enableFulfillmentRestrictedItems: boolean
  cartQueryStaleTime: number
  enableSingletonATF: boolean
  enableFullPagePAC: boolean
  enableVisionSFL: boolean
  disableExpressDeliveryTitleTimeRange: boolean
  enableSSRRedirect: boolean
  enableHide3pSellerName: boolean
  enableDetailedPartialXoLabel: boolean
  enableHideAvgPriceSfl: boolean
  enableFreeDeliveryThreshold: boolean
  shouldUseRequestedSelection: boolean
  enableCartWplusBannerPickup: boolean
  enableShippingOptions: boolean
  showPersonalization: boolean
  enablelastCallOptimizatation: boolean
  skipFulfillmentUpdateInOOSModal: boolean
  showPFSValueProp: boolean
  enablePACCheckoutV2: boolean
  enableAddOnServicesPAC: boolean
  enableShippingFeeClarity: boolean
  enableFreeExpressDeliveryNudgeMessaging: boolean
  enableUnscheduledItemFulfillmentChange: boolean
  enableShippingLabel: boolean
  enableRemoveAvailabilityStatus: boolean
  enableFulfillmentMajorAppliances: boolean
  disableP13nOnPAC: boolean
  enableAddressThreeLines: boolean
  enableSignatureOnDelivery: boolean
  enableCartUnauthFix: boolean
  enableLocationNudgeWithIam: boolean
  enableLatLonForAddress: boolean
  enablePickupDeliveryNotAvailable: boolean
  enableEarlyAccess: boolean
  enablePickupNotAvailable: boolean
  enablePetRXRefillReorder: boolean
  enableInpDeferStepperDispatch: boolean
  enableInpDeferProductTileLink: boolean
  enableFulfillmentChangeInOOS: boolean
  enableNotifyMeBackInStock: boolean
  disableNoTimesMessage: boolean
  enableMergeCartOptimization: boolean
  slotShortcutMaxSlotReqCount: number
  enableDeferRemoveClick: boolean
  slotShortcutGetSlotsQueryCacheTime: number
  enableRegistryCheckoutValidation: boolean
  enableLocationNudge: string
  enableFulfillmentBadging: boolean
  enableIbotta: boolean
  enableRecommendationsPhase2: boolean
  enableNoUnscheduledPickupMessage: boolean
  enableGetCartAuthErrorRefetch: boolean
  enableFCTodayTomorrowHeader: boolean
  enableOrderCutOffLSTimezone: boolean
  enableStreamlinedBadges: boolean
  enableWeightedItems: boolean
  enableVetDietVetCancellation: boolean
  enableATCRateLimitingMessage: boolean
  enableWicBadging: boolean
  enableVisionNoRxCheckout: boolean
  enableI18n: number
  enableVetApprovalRequired: boolean
  enableEnhancedSavings: boolean
  enableSubstituteOOS: boolean
  replaceOutOfStockTimeOut: number
  enableSmartNudges: boolean
  enableACCScheduling: boolean
  enableCartLight: boolean
  enableGroceryPAC: boolean
  enableCallouts: boolean
  enableWplusOldBannerUI: boolean
  enableCTLQuickShop: boolean
  enablePriceChange: boolean
  enableCompleteTheLook: boolean
  enableLastCallFullPage: boolean
  apparelUsername: string
  enablePickupNotAvailableVariation2: boolean
  enableReplaceOutOfStock: boolean
  enableOneLoansLocalImage: boolean
  enableCrossPollination: boolean
  enableWirelessFreebiePromo: boolean
  enableMpPickupPhase2: boolean
  enableCreditCartDiscountBanner: boolean
  enableFulfillmentSwitchVerbiage: boolean
  enableCartGIC: boolean
  enableLastCallPhase2: boolean
  enableExpressUpsell: boolean
  enableLeanMode: boolean
  disableEstTotalOnMweb: boolean
  enableQueueing: boolean
  enableFFModuleHideUnhideCarrot: boolean
  enableColdChainExpansion: boolean
  enableStoreSelectorNudgeOnATC: boolean
  enableCompleteTheLookLabels: boolean
  enableOnePl: boolean
  enableMinLimit: boolean
  enableFPCEAosVariant: number
  enableAccQuantityNudgeVariantB: boolean
  enableStarRatings: boolean
  visionOrderProperties: string
  enableSocialProofBadges: boolean
  enableFreeShippingAndPickup: boolean
  enableSFLPerformanceMode: boolean
  enableDroneDelivery: boolean
  enablePromoDiscount: boolean
  enableOfferIdInUrl: boolean
  enableAccUnUtilisedSlot: boolean
  enableSFLSmileyPrice: boolean
  enableVisionItems: boolean
  hideAcquisitionCardBanners: boolean
  enableMaximumThreshold: boolean
  enableCartBookslotShortcut: boolean
  enablePACCheckout: boolean
  enablePFS: boolean
  showSubscriptionGuestLoginBanner: boolean
  enableShoppableAds: boolean
  enableOrderCutOffTimeInline: boolean
  enableItemLevelSpecialInstruction: boolean
  hideSFLforCCA: boolean
  hideGuestXOCTA: boolean
  enableSplashRouteAddition: boolean
  enablePetRxVetCancellation: boolean
  disableItemLevelMSI: boolean
  enableGiftingCheckbox: boolean
  hidePayAtStoreInPFS: boolean
  enableNewFSM: boolean
  enableWplusRemoveBannersCardCheck: boolean
  enableFulfillmentContentEnhancement: boolean
  enableOOSAlertScroll: boolean
  enableSignInFromCart: boolean
  enableStylisticsCLS: boolean
  enableHideOrderCutOffAtSLAGroupLevel: boolean
  enableAuthErrorFix: boolean
  enableStyliticsClassicQuickShop: boolean
  skipDeliveryAddressRequiredError: boolean
  enableLoopItemUpdates: boolean
  enableShopSimilarForPickup: boolean
  homeScriptSrc: string
  enableLeanModeSFL: boolean
  enableWplusCashback: boolean
  enableForceFooterVisibility: boolean
  enableExpandModeForSubscriptionItems: boolean
  defaultSalesWeight: number
  enableReturnsLabel: boolean
  enableSFLCarouselTopPlacement: boolean
  enableACCOnPAC: boolean
  enableILCCSwitchFix: boolean
  enableSFLMoveToCartOptimization: boolean
  enableACCNonServiceableErrorUI: boolean
  enableLeanModeATC: boolean
  enableSoftBundleOnPAC: boolean
  enableWplusThirtyDaystrial: boolean
  enableAvailableFinancingOptions: boolean
  enableExpressNudgeVariant: number
  enableCartWplusBannerNoSlotSelected: boolean
  enableCTLQuickShopLabel: boolean
  enableEarlyRecos: boolean
  enableSFLPriceDrop: boolean
  enableCarePlansAndHomeServices: boolean
  enableFullPageSignin: boolean
  enableBuyBoxAd: boolean
  enableInHomeAutoReplenishment: boolean
  enableSetShippingOrDeliveryMutation: boolean
  enableNonDetailedErrorPage: boolean
  enableAccQuantityNudge: boolean
  enableSubstituteOOSV2: boolean
  enableInpDeferContinueToCart: boolean
  enableILCCHotFix: boolean
  enableEnhancedEmptyCart: boolean
  projectThunderbolt: boolean
  enableLargeImagesMWeb: boolean
  enableFeeThresholdBarSaveVersion: boolean
  enableExpressUpsellVariant: number
  enableSFLBackInStock: boolean
  enableSubscriptionValuePropBanner: boolean
  homeUsername: string
  enableNewSignInBenefitCards: boolean
  enableStylisticsMoodBoardDesign: boolean
  enableCharityOfChoicePreEnrolment: boolean
  enableUpdateItemsLiteCall: boolean
  enableLastCallNonRoutine: boolean
  disableGetCartCSR: boolean
  enableWplusBannersPostCartLoadPage: boolean
  enablePostLoadDeals: boolean
  enableCartACCBookslotShortcut: boolean
  enablePickupSpokeAccessPoint: boolean
  enableNonConfigBundles: boolean
  showATCSuccessSnackBarForItemPageNonPac: boolean
  enableFPCEHeader: boolean
  enableCTLProductTitle: boolean
  enableShopTheModelBadge: boolean
  enableHelium: boolean
  numberOfMpSeller: number
  enableFFCollapseMode: boolean
  enableLoadAfterATF: boolean
  enableClipRewards: boolean
  enableCartInpOptimizationCheckoutSpinner: boolean
  enableLowInventoryBadging: boolean
  enableAccFourTiresNudge: boolean
  enableAccSchedulingDiscoverabilityV3: boolean
  disableCommaInHeader: boolean
  enableCartLevelMSI: boolean
  enableAEBadge: boolean
  enableItemDeliveryPrice: boolean
  enableATCAnimation: boolean
  apparelScriptSrc: string
  enableWplusGuestBanner: boolean
  enablePACRedirectOnDismiss: boolean
  enableAppleCareOnWPPModal: boolean
  mpPickupSessionTime: number
  enableIntentControl: boolean
  enableWideProductImages: boolean
  enableStyliticsMoodboardQuickShop: boolean
  enableWalmartPlusIntegratedSignUp: boolean
  enableOrderCutOffLiveTimer: boolean
  enableOneLoansRedesign: boolean
  enableProductUnitPriceAsDescription: boolean
  enablePickupItemFeeClarity: boolean
  enableDeferSaveForLater: boolean
  enableFeeThresholdBar: boolean
  enableBenefitSavings: boolean
  enableMPStoreSelector: boolean
  enableSmileyPricing: boolean
  enableACCVariant: number
  enableCTLMultipleLooks: boolean
  enableStylistics: boolean
  enablePACAnchorForGM: boolean
  enableShipInsteadAtItemLevel: boolean
  enablePACGetCartPrefetch: boolean
  enableSetPickupMutation: boolean
  enableGenericWalmartCash: boolean
  enableSlotShortcutImplicitIntent: boolean
  enableShipNodeId: boolean
  enableSFLGrid: boolean
  enableDeferItemToggle: boolean
  enableHotCartFeature: boolean
  disableCartIconPriceTotal: boolean
  enableCartWplusBannerTempo: boolean
  enableProductTileV2: boolean
  enableEvergreenFee: boolean
  enableOnePlZero: boolean
  leanModeRetryLimit: number
  enableFulfillmentGroupId: boolean
  enableAccSchedulingFindStores: boolean
  enableOOSHotFix: boolean
  enableMiniCart: boolean
  enableGICSpeedFilter: boolean
  enableFreeAmendAndReturn: boolean
  enableOnXoMoveOosToSfl: boolean
  enableSSR: boolean
  enableClearMergeCartSFL: boolean
  enableShopSimilar: boolean
  enableLastCallFullProductObj: boolean
  enableBenefitTypeCheckForPartialSwitchModule: boolean
  enableATFGiftingUI: boolean
  enablePickUpSwitchSubscriptionPopup: boolean
  enableCartWplusBannerShippingMoreThanMin: boolean
  enableEnhancedItemUpdates: boolean
  enableUnconditionalHotSwitch: boolean
  disableCartPartialIntentWarning: boolean
  enableLinePriceForSFL: boolean
  enableClearMergeCartId: boolean
  enableExpressReservationEndTime: boolean
  enableFulfillmentChoice: boolean
  enableMultiline: boolean
  enablePACAOSVariants: number
  enableAccModalOnItemPage: boolean
  enableFulfillmentFunnel: boolean
  enablePFSCopyChanges: boolean
  disableGuestPartialXO: boolean
  savingsRecommendationTextV2: boolean
  calculateFooterPositionOnResize: boolean
  enableReduceSplitCartNudge: boolean
}

export interface Bookslot {
  _all_: All3
}

export interface All3 {
  hideStoreChooserDefaultAlert: boolean
  enableWirelessPostpaid: boolean
  walmartPlusFreeDelivery: boolean
  tempoCacheExpirationInSeconds: number
  enableWalmartPlusIntegratedSignUp: boolean
  hidePickupSlotPrice: boolean
  alcoholRestrictedSlotsFilterEnable: boolean
  enableBlockRegistrantAddressDelivery: boolean
  enableFulfillmentIntent: boolean
  enableInHomeSlotsQueryHeader: boolean
  mergeSlotsEnable: boolean
  enablePickupOnShippingIntent: boolean
  enableWalmartPlus: boolean
  nodeSelectableOnlineEnable: boolean
  enableStoreSelectorByItemId: boolean
  enableEvergreenSlot: boolean
  enableCityStateInputValidation: boolean
  enableExpress6amBanner: boolean
  enableExpressEvergreenDesignUpdate: boolean
  enablePriorityTimesIntegratedSignup: boolean
  expressDeliveryOnlyStores: boolean
  hideIneligibleSlotsUnderCTA: boolean
  enableHolidayFreeExpressNewUI: boolean
  enableEvergreenHolidayDiscount: boolean
  enableWplusCashback: boolean
  enableUseCurrentLocation: boolean
  enableEarliestAvailableSlotPreselection: boolean
  enableInventoryAwareMPPickup: boolean
  enableInHomeAmPmSlotsPhase2: boolean
  enableUseCurrentLocationFromBrowser: boolean
  enableStoreBrandFormat: boolean
  evergreenWPlusMemberHolidayDiscountStrikeoutPrice: string
  enableEarliestAvailableDayPreselection: boolean
  enableNoPickupSlotSelectionForDefaultStore: boolean
  enableStoreHours: boolean
  enableStorePagesAndFinderPhase2: boolean
  enableInputTypeAhead: boolean
  enableAccSlotExpansion: boolean
  enableSlotMetadataLogging: boolean
  enableStoreNotFoundErrorHandling: boolean
  enableWplusOldBannerUI: boolean
  disablePostalCodeValidation: boolean
  enableInhomeTipFreePriceLabel: boolean
  enableReservationNotAcceptableFix: boolean
  enableStoreSelectorFeedback: boolean
  enableStoreSelectorMarketplacePickup: boolean
  enableStoreSelectorResiliency: boolean
  enableExpressSlotIsSelectableLogicFix: boolean
  enableACCStoreSelectorOnSlotsUnavailable: boolean
  enableAllSlotsUnavailableMessageTypesFix: boolean
  enableFulfillmentOptionURLParam: boolean
  enableOfflinePaymentForCSPD: boolean
  disableFreeDeliveryBannerForExpressOnlyStores: boolean
  enablePassCartIdAcidCheckStoreSelector: boolean
  enableInHomeAmPmSlots: boolean
  deliveryStoreSelectorRadiusInMiles: number
  refreshCPOnStoreChange: boolean
  enableItemIneligibleCount: boolean
  enableMembershipSlotView: boolean
  gmStoreMessageForNoUSPSlot: boolean
  enableZeroDeliverySlotPriceFree: boolean
  projectThunderbolt: boolean
  enablePlacesAutocompleteByAddress: boolean
  enableACCStoreSelectorErrorHandling: boolean
  enableReReserveSlot: boolean
  enableEvergreenFee: boolean
  enableDeliveryPass: boolean
  enableDeliveryStoreSelectorInHomeSupport: boolean
  enableColdChainExpansion: boolean
  evergreenNonMemberHolidayDiscountStrikeoutPrice: string
  disableSlotShortcutInGIC: boolean
  enableColdChainExpansionFilterSlots: boolean
  disableMergeAndGetCartCSR: boolean
  enableAvailableForInstallationText: boolean
  enableMultipleInhomeAddresses: boolean
  enableAmendsAccSlotExpansion: boolean
  enablePassCartIdAcidCheck: boolean
  bookslotShortcutMaxSlotReqCount: number
  enableNoSlotPreselectionOnTabSwitch: boolean
  enableSlotPreSelectionV2: boolean
  enableUnauthorizedAccessToCartErrorFix: boolean
  enableFreeExpressNewUI: boolean
  enableDeliveryFromStoreInfoModule: boolean
  enableCityStateZipcodeAdaptiveInput: boolean
  enableItemIneligibleBadgeNewUi: boolean
  enableCityAndStateInput: boolean
  enableDeliveryAddressFromSlotData: boolean
  enableHideInstoreCheckmark: boolean
  enablePriorityTimes: boolean
  skipGetSlotsForGuest: boolean
  maxCountOfStoresForInventory: number
  enablePreselectionV2UserIntentOverReservation: boolean
  enableLocalizedStringInBookSlot: boolean
  enableWplusRemoveBannersCardCheck: boolean
  enableBookslotMobileSticky: boolean
  enableCartFulfillmentOption: boolean
  enableStorePagesAndFinder: boolean
  enableNoSlotsAvailableScreen: boolean
  enableStoreSelectorUnauthorizedAccessToCartErrorFix: boolean
  enablePremiumSlotsBranding: boolean
  enableTempoBookslotSlotPromotionBanner: boolean
  enableCityAndStateInputForPickupStore: boolean
  enableEvergreenSlotBranding: boolean
}

export interface Header2 {
  _all_: All4
}

export interface All4 {
  isAlertBarEnabled: boolean
  showOptOut: boolean
  showAddressLineOne: boolean
  enableInpDeferFlyoutLinks: boolean
  enableInpClickSearchInputField: boolean
  hideServiceWidget: boolean
  enableSubNavExtension: boolean
  showNavLinks: boolean
  enableNonStickyGICByPath: string
  enableNonStickyHeaderForExternalOnly: boolean
  enableInpDebouncedSearchTerm: boolean
  enableGepSuppressServiceMenu: boolean
  enableNavClickability: boolean
  globalNavCacheVariation: string
  enableReorder: boolean
  enableGICAutoShowOnSessionStart: boolean
  enableOptimizedHeaderLogoSVG: boolean
  enableGicStoreNotFoundErrorHandling: boolean
  heartingEnhancementsEnable: boolean
  enableTADropdown: boolean
  calloutViewsPerIdPerBSTC: number
  flyOutExpandOnClick: boolean
  enableWplusLogoOnSiteHeader: boolean
  hideSwitcher: boolean
  showMembershipLink: boolean
  enableHeaderSubnavDuckingV2: boolean
  enableHeaderSubnavDuckingV1: boolean
  enableInpSearchSsrRoute: boolean
  enableResponsiveHF: boolean
  enableLightweightHeader: boolean
  enableDeliveryStoreSelection: boolean
  calloutsEnabled: boolean
  enableL0SeoLinksForItemPage: boolean
  debouncedSearchTermTimeout: number
  enablePickupStoreSelection: boolean
  enableRedesignedHeader: boolean
  mWebSubNavLinksPages: string
  enableFetchAlertBarCSR: boolean
  fetchLocation: boolean
  maxCalloutsPerBSTC: number
  enableRedirectionOfHelpTopicPages: boolean
  enableNotificationCenter: boolean
  enableMultipleInhomeAddresses: boolean
  enableInpSearchBarAndIcon: boolean
  enableGoogleEnhancedPlaceActions: boolean
  enableRedesignedHeaderV2: boolean
  enabledGICRetentionPrompt: boolean
  enableL0SeoLinksForAllPage: boolean
  enableSuppressAlertBarOnMweb: boolean
  enableGIC: boolean
  enableGICGuestStoreUpdate: boolean
  enableNonStickyHeader: boolean
  navLinks: string
  enableGenAiCustomStyle: boolean
  enableGicResiliency: boolean
  enableGlobalSubNavLinks: boolean
  fetchLocationCSROnLoad: boolean
  enableWplusRedesignTheme: boolean
  enableAccountButtonLanguageSelector: boolean
  enableLocalizedStringInGIC: boolean
  enableWalmartCashInNav: boolean
  calloutViewsPerIdPerVTC: number
  enableGoldBackgroundSearchIcon: boolean
  enableStickyGIC: boolean
}

export interface Pulse {
  _all_: All5
}

export interface All5 {
  enableV1Schema: boolean
  enableQuantumMetric: boolean
  enableScriptDefer: boolean
  alwaysAllowedTagList: string
  enableFS: boolean
  logLevel: string
  enableBeaconDefer: boolean
  enableBeaconDeferBrowserAllowList: string
  enableATFMarker: boolean
}

export interface Footer2 {
  _all_: All6
}

export interface All6 {
  enableXOFeedback: boolean
  hideGiveFeedbackSection: boolean
  timeIntervalInHoursNativeAppInstallPrompt: number
  dbQrDownloadBottomSheetSecondaryMessageText: string
  enableShopOurBrandsSection: boolean
  isFullFooterEnabled: boolean
  enableSocialMediaLinks: boolean
  feedbackFetchMigrationToPlatformFetch: boolean
  enableAccountDeletionLink: boolean
  enableEmailSignup: boolean
  enableQuickLinkSection: boolean
  hideContactNumber: boolean
  enablePrivacyLinkUpdate: boolean
  hideSignupForEmailLink: boolean
  enableNativeAppDownloadBottomsheet: boolean
  enableDownloadOurApp: boolean
  enableDbQrDownloadBottomSheet: boolean
  enableRedesignedNativeAppInstallStickyBanner: boolean
  deleteAccountLink: string
  feedbackTenantName: string
  timeIntervalInHoursDbQrNativeAppInstallBottomSheet: number
  maxNumberOfDbQrDownloadBottomSheetViews: number
  dbQrDownloadBottomSheetPrimaryMessageText: string
  enableMXUserComments: boolean
  enableRemarketingEmailSignup: boolean
  enableNativeAppDownloadStickyBanner: boolean
  enableInStoreWifiAppPrompt: boolean
  maxNumberOfNativeAppInstallPrompt: number
  enableForceB2BLogout: boolean
}

export interface Shared {
  _all_: All7
}

export interface All7 {
  helpLinkMobileAlertsTerms: string
  legacySiteNGRedirectEnabled: boolean
  legacySiteInhomeRedirectEnabled: boolean
  helpLinkReturnRefunds: string
  legacySiteDirectspendingRedirectEnabled: boolean
  helpLinkMPReturnPolicy: string
  legacySiteEbtRedirectEnabled: boolean
  helpLinkTermsOfUse: string
  enableWaitingHallway: boolean
  disableGetCartSSR: boolean
  helpLinkStorePurchase: string
  beaconWithQuantumMetrics: boolean
  enableCCAFlow: boolean
  showFeesAndTaxesDisclaimer: boolean
  enableOnePaySignUpVariant: boolean
  ssrNavBrowserAllowList: string
  showCashbackProgressBar: boolean
  enableMedalliaScriptAutoLoad: boolean
  enableRxpd: boolean
  enableIbotta2xRewards: boolean
  enableTmxV3: boolean
  enableEBTCheckBalance: boolean
  itemReservationsBannerText: string
  enableAERedesign: boolean
  enablePreferredStore: boolean
  enableEnhancedCarouselTiles: boolean
  maxDisplayCountForGepHighlight: number
  enableReduceSplitReplaceATCNudge: boolean
  enableExpressUnavailableInShortcuts: boolean
  enableHotPhase2: boolean
  enableSustainabilityBadge: boolean
  enableUseTaxonomyBeacon: boolean
  enableOnlyAtWalmartBadge: boolean
  enableOnePaySignUpDescriptionVariant: boolean
  enableRxSignatureOnDelivery: boolean
  enableSubscriptionBasketDiscountItemPage: boolean
  enableSmileSaveBadge: boolean
  enableScanAndGoFlow: boolean
  enableInHomeGuidedDelivery: boolean
  b2bOrgCookieDomain: string
  enableBuyNowChangePayment: boolean
  enablePovBadge: boolean
  enableCaDpRebookSlot: boolean
  enableGepHeaderFooterCache: boolean
  cspReportOnlyOverrides: string
  enableEditQuantityCCA: boolean
  enableHubAndSpoke: boolean
  queueRefetchInterval: number
  enableSellerFeeBreakdown: boolean
  enableBuyNowWallet: boolean
  subscriptionManagePageUrl: string
  queueMaxRefetchDuration: number
  enableInpDeferHubSpokePanelLink: boolean
  enableSiteWideBanner: boolean
  enableLanguagePreferenceDialog: boolean
  multiSiteRedirectUrl: string
  enableFPO: boolean
  enableGicDeeplink: boolean
  enableFloatingAddToOrder: boolean
  enableSinglePageXO: boolean
  cacheFooterExpireDurationMs: number
  enablePaymentMethodPromotion: boolean
  hideFulFillmentLabel: boolean
  enableSignatureOnDelivery: boolean
  enableSusbcriptionBasketExperience: boolean
  enableWplusSignUpOffer: boolean
  enableErrorLogging: boolean
  vetSearchLimitsEnabled: boolean
  maxSpecialOrderQuantityLimit: number
  enableLocalizedStringForReservationText: boolean
  enablePetRxManualRefill: boolean
  substitutionsOptInClarity: boolean
  disableSnapshotSSR: boolean
  enableInpDeferProductTileLink: boolean
  enableACCSinglePackageSupport: boolean
  enableNewCookieSerializer: boolean
  enableSpendLimit: boolean
  enablePersistedQueries: boolean
  enableI2SentryScript: boolean
  enableTempoHeaderMenuTitle: boolean
  enableLocationNudge: string
  enableIphoneUrlParams: boolean
  enableHolidayFreeExpressDelivery: boolean
  enableAEDynamicPromise: boolean
  enableUpdateYearSLAHeader: boolean
  enablePayAtStorePrintButton: boolean
  tmxPathnameRulesAllowCSV: string
  enableCheckoutProp65: boolean
  enableDeferCartCheckout: boolean
  enablePhoneVerificationForCart: boolean
  enableHotPacSessionTime: number
  enableLawnAndGarden: boolean
  enableAutoTmxForAll: boolean
  enableSpendAnalyticsGroup: boolean
  enableOrderDeviceInfo: boolean
  downlinkThreshold: string
  enableGicEngagement: boolean
  enableWplusPhoneRecyclingPrevention: boolean
  enable3pEGiftCardPersonalization: boolean
  enableInStoreShelfMessage: boolean
  enableWplusACCPayForServiceOnline: boolean
  enableExclusiveWplusLabel: boolean
  aeModuleHeaderText: string
  enableSubscriptionManagePageRouter: boolean
  enablePersistedCartId: boolean
  enableQueueSizeIncrease: boolean
  enableShippingErrorCity: boolean
  enableACCSchedulingUpsell: boolean
  excludeShippingPurse: boolean
  enableCouponAvailableMessageAlwaysForVariant: boolean
  enableFeedbackSubmitPageType: boolean
  mpaSkipURLPatterns: string
  enableBuyNowCXORedirect: boolean
  enableInpDeferChipModuleLink: boolean
  enableItemizedReporting: boolean
  enableProductCarouselCSR: boolean
  enableGEP: boolean
  promoDiscountVisibilityType: string
  enableProgressiveCss: boolean
  enableAccUpsellVariant: number
  enableSubscriptionsInTransactionFreshFrozen: boolean
  enableLegalDisclosureSkinnyBanner: boolean
  enableTempoMembershipPlanCard: boolean
  enableTileImageEarlyHint: boolean
  enablePromoData: boolean
  vetSearchWarningLimit: number
  enableKlarnaBNPL: boolean
  enableClaimAccount: boolean
  enableBuyMore: boolean
  enableReduceSplitATCNudge: boolean
  enableGICHot: boolean
  enablePremiumMembershipPhase2: boolean
  enableChargeForSubs: boolean
  enableGtagScript: boolean
  savingsRecommendationFlag: number
  payAtStoreExpiryHours: number
  enablePxInjection: boolean
  disableLabelHighlight: boolean
  enableAppleCareFreeTrials: boolean
  enableSmileWasPricing: boolean
  cvEndpoint: string
  enableBuyNowHot: boolean
  enableSaveStorePrompt: boolean
  uxconPartialConsentedExpiry: number
  enableQueueing: boolean
  enableWplusProgramId: boolean
  enableWFSGlobal: boolean
  enableProductTileSmileyVariant: boolean
  enableFirstAndLastName: boolean
  foo: boolean
  enableProductFlagStyleId: boolean
  enableNations: boolean
  tenantIdEnabled: boolean
  enableScriptBasedBeacon: boolean
  enableInpDeferHorizontalTileLink: boolean
  enableRewardsCapping: boolean
  bootstrapVersion: string
  forceEnableSSRNavigationURLs: string
  tenantCountryCodes: string
  visionOrderProperties: string
  enableSubscribeToSaveNudge: boolean
  enableDroneDelivery: boolean
  enableMOQ: boolean
  enableTireInstallationWithFitment: boolean
  enableSavedPromoCodes: boolean
  enableBenefitTracker: boolean
  placeholder: string
  aeModuleHeaderVariation: string
  enableListLandingView: boolean
  itemImagePrefetchResolution: string
  enableBenefitBadge: boolean
  enableBuyingAtStore: boolean
  enablePFS: boolean
  enableCSRBootstrapCall: boolean
  enableGicDecoupling: boolean
  enableFreeFulfillmentExpressDelivery: boolean
  enableBuyNowAspectiva: boolean
  enableLaunchMultiSiteLogoffConfirmationModal: boolean
  enableB2BPricing: boolean
  enableMegaBuyPayment: boolean
  enableGuidedDelivery: boolean
  enableWFSGlobalLabelV2: boolean
  enableBusinessCustomField: boolean
  enableAmendChangePayment: boolean
  enableLocalizedStringForReservation: boolean
  oilChangeSchedulingEnabled: boolean
  enableBuyNowTYUrl: boolean
  enableInHomeNudge: boolean
  enableBagsNeededMessage: boolean
  enableNeedHelpOptions: boolean
  disableAuthHeaderCheck: boolean
  enableAOSRearchitect: boolean
  enableSplitMetric: boolean
  enableRewardsPercentSuppressionUnpublishedPlans: boolean
  sendCreateAccountSuccessBeacon: boolean
  enableTempoCountdownTextColor: boolean
  enablePreOwnedExperience: boolean
  enableGICBookslot: boolean
  enableWplusAssistOnIntegratedSignup: boolean
  enable3pAlcohol: boolean
  cacheFullFooterVersion: number
  enableOptimizedScrollerProductCarousel: boolean
  enableAddressNeededForDeliveryDateMessaging: boolean
  enableAfterItemDiscountSubtotalLabel: boolean
  enableDroneDeliveryPhase2: boolean
  enableWrongStoreReminderDays: number
  enableInpMemoCarousel: boolean
  enableMedalliaScript: boolean
  enableSmileNowPricing: boolean
  enableExpandedGiftingEligibility: boolean
  substitutionItemPriceAndQuantityClarity: boolean
  enableSubscriptionsInTransaction: boolean
  enableWic: boolean
  enableSubscriptionReplacement: boolean
  accSlotShortcutMaxSlotCount: number
  proSellerBadgeVisibilityType: number
  enableDisplayStartTimeOnlyForACC: boolean
  enableFulfillmentDisplay: boolean
  enableDigitalRewards: boolean
  isIncludeIphoneMetaTagAfilliateLinks: boolean
  enableShowBackOrder: boolean
  enableCustomerChoiceV2: boolean
  i2SentryScriptUrl: string
  enableCsp: boolean
  enableWplusRetentionNudge: boolean
  mxSamsCcaContact: string
  enableLiquorBoxAlcoholExpansionCartBookslot: boolean
  enableDobLinkage: boolean
  enableUnpublishedConfigurator: boolean
  enableMegaBuyForNonMember: boolean
  enableSignOnDelivery: boolean
  enableWplusEaOfferSignupBanner: boolean
  enableAOSModuleAttribute: boolean
  isFitmentRequiredForTireInstallation: boolean
  enablePartytownDebug: boolean
  enablePartytown: boolean
  enableFullPageCart: boolean
  enableCartParallelFetch: boolean
  enableCashiCashback: boolean
  enableSpecialRequest: boolean
  disable3PBuyingRestriction: boolean
  enableStoreChooserDefaultAlertFromGIC: boolean
  enableWplusBuyNowPhoneRecyclingPrevention: boolean
  enableAstCookie: boolean
  enableDynamicOptionsFeedback: boolean
  enableMultiQuantityDiscounts: boolean
  tmxPathnameRulesDisallowCSV: string
  enableSemStoreGICSync: boolean
  enableEnhanceInHomeSlotUX: boolean
  enableTimeSensitiveApprovalWindow: boolean
  enableWplusDriveDeliveryFirst: boolean
  enableRewardsHistory: boolean
  enablePreOrderBadgesFromUBS: boolean
  inHomeDeliveryFeePlusTip: string
  enableMsiMci: boolean
  enableBuyNowPromiseMessage: boolean
  enableSSRNavigation: boolean
  enableTenantWcpMode: boolean
  enableMultiStorePickup: boolean
  vetMaxLimitSearch: number
  enableQueueingCtaRedirection: boolean
  enableRecoverableGqlSubgraphErrors: boolean
  enableGEPForPilot: boolean
  enableDifferentCaptchaMethod: boolean
  cacheFullFooterExpireDurationMs: number
  businessRewardsThresholdAmount: string
  enableStoreSelectorDefaultStoreAlertFromItemPage: boolean
  enablePayOnMobile: boolean
  enableFulfillmentSpeedAnalytics: boolean
  enableReferToFriendIntl: boolean
  onePayCashbackAmount: number
  enableFastRefundCredit: boolean
  enableIntlInpDeferRelatedPageLink: boolean
  enableExpressStaticRange: boolean
  onePaySpendAmount: number
  enableBuyNowSPXO: boolean
  enableEvergreenSlotBranding: boolean
  enableWalmartPlusFreeDiscountedExpress: boolean
  enableSlotsParallelFetch: boolean
  enableGroupManager: boolean
  enableExpressSla: boolean
  enableExtendedDeliveryCatchment: boolean
  enableSinglePaymentForm: boolean
  enableClaimRate: boolean
  enableUngatedSubscription: boolean
  enableOutOfStockFiltering: boolean
  enableTapToClipPromoCode: boolean
  enableSubscriptionValueProps: boolean
  enableShowSavingsGrandTotal: boolean
  enableBuyNowFreeShippingNudge: boolean
  enableHpRedesign: boolean
  enableTYCashiBanner: boolean
  disableMegaBuyMinQtyCheck: boolean
  enableProductVariantsInMultiSave: boolean
  enableBuyNowCXOWithPcid: boolean
  enableReduceSplitCTASwap: boolean
  enableBuyNowCvvSPXO: boolean
  enableDpFreeTrial: boolean
  enableACCVariant: number
  cacheHeaderVersion: number
  enableClientTracingPulseConnector: boolean
  isPlusBannerRedesign: boolean
  enableProSellerBackground: boolean
  enableWrongStore: number
  enableBuyNow: boolean
  enableSubscriptionForTenant: boolean
  stopAutoRenewalPeriodDays: number
  enableManufacturersCoupons: boolean
  cacheHeaderExpireDurationMs: number
  enableACCShipInsteadCTA: boolean
  enableBenefitTrackerForMultiCardExperience: boolean
  enableDigitalRewardsHistoryV2: boolean
  enableSubscriptionsInTransactionScFulfillment: boolean
  enableBuyNowSavings: boolean
  enableBusinessOfferCenter: boolean
  enableInpSsrRouteCart: boolean
  enableSinglePaymentFormWallet: boolean
  enableHPO: boolean
  enableGreenPriceExtraSavings: boolean
  enableBadges: boolean
  enableItemLevelCheckout: boolean
  cacheFooterVersion: number
  enablePreOwnedBadges: boolean
  enableWeeklyReservationCartBookslot: boolean
  enableCWVAtcClick: boolean
  enableNewDesignJumpStartCart: boolean
  enableNewPrivacyBanner: boolean
  enableGICSpeedFilter: boolean
  enableHotPostATC: number
  enableEBTBadge: boolean
  enableLensAttributesUtil: boolean
  enableMultiSaveMiniPDPPage: boolean
  enableGuidedDeliveryFastFollow: boolean
  enableJumpstartQuickAdd: boolean
  enableBuyNowSavingsStickyFooter: boolean
  enableSubscriptionsPetRxInTransaction: boolean
  enableCustomerChoiceVPFilter: boolean
  enableInpDeferredRouter: boolean
  enableDxgyBroadscaleWalmartCash: boolean
  enableBaggageHeader: boolean
  enableMPDelivery: boolean
  enableBadgesGroups: boolean
  enableGICOnboarding: boolean
  enableFeedbackGqlMigration: boolean
  locationNudgeExpiryInMins: number
  enableCustomerProfileCookieCache: boolean
  enableSlimJumpStartCart: boolean
  enableOrganizationComparisonTable: boolean
  gepHighlightExpirationInMins: number
  enableSubscriptionDiscounts: boolean
  enableWmtpcBenefitCard: boolean
  queueTimeToCompletePurchase: number
  enableBusinessPlan: boolean
  enableEnhancedCarouselTilesByCategory: string
  enableGifting: boolean
  enableProductRewardStyleUpdate: boolean
  enableDeliveryLabel: boolean
  enableOneTimePurchaseDefault: boolean
  enableReviewerCommunity: boolean
  enableGroupsForEnterprise: boolean
}

export interface Ads {
  _all_: All8
}

export interface All8 {
  spMq2Measure3PEnable: boolean
  spMq2Measure1PEnable: boolean
  ipMq1RenderEnable: boolean
  ipSkReqEnable: boolean
  bpMq2Measure1PEnable: boolean
  measure3PImpEnable: boolean
  cacheBusterTimeDiffMs: number
  bpSkReqEnable: boolean
  bpMq2ReqEnable: boolean
  spMq1RenderEnable: boolean
  bpSkMeasure1PEnable: boolean
  bpSkMeasure3PEnable: boolean
  spMq2RenderEnable: boolean
  ipSpc2Measure1PEnable: boolean
  hpMq1Measure1PEnable: boolean
  hpMq1Measure3PEnable: boolean
  spSkRenderEnable: boolean
  bpSpc1ReqEnable: boolean
  bpMq1ReqEnable: boolean
  displayCheckIp: boolean
  bpMq1RenderEnable: boolean
  hpMq2RenderEnable: boolean
  moatIvt: string
  bpMq2RenderEnable: boolean
  hpMq1RenderEnable: boolean
  ipSpc2ReqEnable: boolean
  spSkMeasure1PEnable: boolean
  spSkMeasure3PEnable: boolean
  bpSpc1Measure1PEnable: boolean
  spMq1Measure1PEnable: boolean
  ipSkMeasure1PEnable: boolean
  spMq1Measure3PEnable: boolean
  bpMq1Measure1PEnable: boolean
  ipSpc1ReqEnable: boolean
  spMq2ReqEnable: boolean
  bpSkRenderEnable: boolean
  ipMq1Measure3PEnable: boolean
  ipMq1Measure1PEnable: boolean
  spSkReqEnable: boolean
  safeframeURL: string
  hpMq1ReqEnable: boolean
  bpMq1Measure3PEnable: boolean
  ipSpc1Measure1PEnable: boolean
  bpBigMeasure1PEnable: boolean
  ipSkMeasure3PEnable: boolean
  ipMq1ReqEnable: boolean
  ipMq2Measure1PEnable: boolean
  ipMq2Measure3PEnable: boolean
  hpMq2Measure3PEnable: boolean
  hpMq2Measure1PEnable: boolean
  spMq1ReqEnable: boolean
  spSpc1ReqEnable: boolean
  bpMq2Measure3PEnable: boolean
  blockInternal: boolean
  ipSkRenderEnable: boolean
  hpMq2ReqEnable: boolean
  ipMq2ReqEnable: boolean
  spSpc1Measure1PEnable: boolean
  ipMq2RenderEnable: boolean
  ipDacMiddleReqEnable: boolean
  sbaBannerDesignV3Intl: boolean
  tpMq2ReqEnable: boolean
  ipMq1DSPEnable: boolean
  enableHpRedesignXPA: boolean
  bpMq2FeedbackEnable: boolean
  pacSkMeasure3PEnable: boolean
  hpAbF4Measure3PEnable: boolean
  bpSbaDesignIterationsEnable: boolean
  adsHpControlGroupXpa: string
  typSkFeedbackEnable: boolean
  bpSpcEnableAdsBtfCmpV3: boolean
  spSigFeedbackEnable: boolean
  hpPrismAbF5Measure1PEnable: boolean
  sbaUiEnhanceEnable: boolean
  enableBrowseAdsRerender: boolean
  hpPrismAbF4FeedbackEnable: boolean
  ipMq1FeedbackEnable: boolean
  cartP13nMeasure1PEnable: boolean
  enableBlendedSpAdsVariation: boolean
  hpGalAdViewableGmBeaconFix: boolean
  hpRedesignVisitedXpa: string
  ipMq2Version: string
  hpTpFt3RenderEnableIntl: boolean
  bpSigFeedbackMobileEnable: boolean
  spSingleTTO2Measure1PEnable: boolean
  adsControlGroupXpa: string
  hpPrismAbF4ReqEnable: boolean
  moatRefactorEnable: boolean
  hpPrismTpF1Measure3PEnable: boolean
  adVariantBeaconEnable: boolean
  SbaNumsAdShownFixEnable: boolean
  ipMq2FeedbackMobileEnable: boolean
  fillEmptyLocWithProductLocEnable: boolean
  typMq1ReqEnable: boolean
  hpAbF5Measure3PEnable: boolean
  adSPIncrementDecrementCheck: boolean
  hpAccHeroPov3RenderEnable: boolean
  odpSkMeasure1PEnable: boolean
  odpSkReqEnable: boolean
  hpGpbFs1DSPEnable: boolean
  isRedirectMwebBrowseSponsoredVideoAdIntl: boolean
  hpAccHeroPov2RenderEnable: boolean
  bpSvReqEnable: boolean
  hpPrismAbF4Measure1PEnable: boolean
  infoIconClickEnable: boolean
  enableSppMwebItemp13nIntl: boolean
  enableSpCarouselElementIdChange: boolean
  enableSppWebItemp13nIntl: boolean
  spMq2FeedbackMobileEnable: boolean
  spImpBeaconServiceEnabled: boolean
  spSTTO2NoAdDSP: boolean
  ipBr1RenderEnableIntl: boolean
  dspViewabilityTracking: boolean
  hpTpFs2ReqEnable: boolean
  ipBbReqEnable: boolean
  bpSingleTTO2RenderEnable: boolean
  gallerydisplayadClientAdIntl: boolean
  hpAbF5ReqEnable: boolean
  shpSkEnableAdsBtfCmpV3: boolean
  spSvAdsEligibleBeaconEnable: boolean
  displayPreviousRenderCheck: boolean
  phSkDSPEnable: boolean
  enableSppWebSearchBrandAmplifierAdIntl: boolean
  enableIntlTrackTTOCardIndex: boolean
  sbaMwebRedesignV1Enable: boolean
  pacSkDSPEnable: boolean
  spVideoAdsMobileStyling: boolean
  enableItemPageThreeGridAdsModule: boolean
  hpAccFetchPriorityEnable: boolean
  spGalBottomRenderEnable: boolean
  displayDeduplication: boolean
  tpSvAdsEligibleBeaconEnable: boolean
  enableSppMwebItemSponsoredProductCarouselIntl: boolean
  enableSponsoredRedirectParam: boolean
  phSkMeasure1PEnable: boolean
  bpSingleTTO1RenderEnable: boolean
  enableIpDupReqFix: boolean
  enableSppMwebItemBuyBoxAdIntl: boolean
  hpSpcEnableAdsBtfCmpV3: boolean
  spGalRenderEnable: boolean
  enableGalleryMultipleLocations: boolean
  spDacBottomReqEnable: boolean
  hpGalReqEnable: boolean
  shpSTTO2NoAdDSP: boolean
  bpSingleTTO2Measure3PEnable: boolean
  displayOrderDeduplication: boolean
  bpGalBottomDSPEnable: boolean
  hpPrismTpF2Measure3PEnable: boolean
  ipMq2FeedbackEnable: boolean
  adRequestBeaconEnable: boolean
  enableAdsPreorderCTA: boolean
  displayPoVAdBlockerEnable: boolean
  enableProductBrandOnBeacon: boolean
  shpSkV2DSPEnable: boolean
  adsSubscriptionPriceEnable: boolean
  ipGalEnableAdsBtfCmpV3: boolean
  ipGalMiddleReqEnable: boolean
  spSingleTTO1Measure1PEnable: boolean
  hpGalMiddleReqEnable: boolean
  spSvMultiItemsEnable: boolean
  spGenAiSbaDesignIterationsEnable: boolean
  bpSvVideoTrackingEnable: boolean
  typMq1RenderEnable: boolean
  bpGalMeasure1PEnable: boolean
  useSearchBrowseBtfCmp: boolean
  phSkConfigLazy: number
  hpPrismTpF3DSPEnable: boolean
  typSkDSPEnable: boolean
  enableCreativeTypeBeacon: boolean
  hpAccEarlyReturnEnable: boolean
  bpMq1FeedbackEnable: boolean
  spSbaVariationsConfig: string
  updatedAdBlockerDetectionEnabled: boolean
  enableSeasonalColorOption: boolean
  spSingleTTO1DSPEnable: boolean
  hpPrismTpF1ReqEnable: boolean
  ipGalMiddleRenderEnable: boolean
  tpMq2RenderEnable: boolean
  spImpBeaconServiceBatchIntervalMs: number
  enableBrandBoxEarlyLoad: boolean
  enableCustomFeedbackDisclaimer: boolean
  hpGpbFs1Measure1PEnable: boolean
  spGalMeasure1PEnable: boolean
  hpAccHeroPov3Measure3PEnable: boolean
  typSkRenderEnable: boolean
  hpP13nMeasure1PEnable: boolean
  typSkMeasure1PEnable: boolean
  spSvGridPositionBeacon: boolean
  bpSTTO2NoAdDSP: boolean
  bpGalBottomRenderEnable: boolean
  enableSppMwebBrowseSponsoredVideoAdIntl: boolean
  phSkConfigModuleLocation: string
  enableSppMwebBrowseSponsoredProductCarouselIntl: boolean
  bpSingleTTO1Measure3PEnable: boolean
  shpSingleTTO2ReqEnable: boolean
  lazyRenderCmp: boolean
  displayIdentifyAdServer: boolean
  ipMq2DSPEnable: boolean
  displayPPMMode: boolean
  bpMqEnableAdsBtfCmpV3: boolean
  feedbackForVideoRefactor: boolean
  enableSppMwebCategorySponsoredProductCarouselIntl: boolean
  enableSppWebBrowseBrandAmplifierAdIntl: boolean
  shpSingleTTO2Measure1PEnable: boolean
  spHideSBA: boolean
  spGenAiSbaVariationsConfig: string
  ipP13nMeasure1PEnable: boolean
  enableAdSmilePricing: boolean
  tpSvReqEnable: boolean
  enableSppWebCategorySponsoredProductCarouselIntl: boolean
  tpSvDisableBadges: boolean
  bpSingleTTO2ReqEnable: boolean
  isRedirectWebItemp13nIntl: boolean
  shpSkMeasure1PEnable: boolean
  ipSpcHrAdsEligibleBeaconEnable: boolean
  bpSvDisableBadges: boolean
  hpPovLockoutPriorityEnable: boolean
  spAtcTrackBeaconFix: boolean
  adPreviousResponseNullCheck: boolean
  enableTabularCarousalP13nAdsTab1: boolean
  bpSbaVariationsConfig: string
  enableGetPvId: boolean
  hpAccHeroPov3ReqEnable: boolean
  bpSvMultiItemsEnable: boolean
  spMqEnableAdsBtfCmpV3: boolean
  enableTTFFCalcWithPlayingEvent: boolean
  videoEarlyloadOffset: number
  adShowAtcFieldEnable: boolean
  phSkFeedbackEnable: boolean
  enableIntlBeacons: boolean
  shpSingleTTO1RenderEnable: boolean
  ipBbMultiItemsEnable: boolean
  tpMq1Measure1PEnable: boolean
  hpPrismTpF1FeedbackEnable: boolean
  hpTpFs1DSPEnable: boolean
  spGalDSPEnable: boolean
  ipSkFeedbackEnable: boolean
  tpSkDSPEnable: boolean
  isRedirectMwebItemp13nIntl: boolean
  hpTpFs2FeedbackEnable: boolean
  adSpBuyNowBeaconEnable: boolean
  spSvAutoGenCcDisclaimerEnabled: boolean
  displayUnitWrapperUnmount: boolean
  useNewProdBoxWrapper: boolean
  pacSkV2DSPEnable: boolean
  hpPrismTpF1RenderEnable: boolean
  tpSkMeasure1PEnable: boolean
  bpSkDSPEnable: boolean
  hpGridPovFt2RenderEnableIntl: boolean
  ipBr1Measure1PEnable: boolean
  hpGpbFs2FeedbackEnable: boolean
  adManualShelfIdCheck: boolean
  hpGalMeasure1PEnable: boolean
  shpSkFeedbackMobileEnable: boolean
  displaySbaLogospQs: boolean
  adSpClipBeaconEnable: boolean
  spSigMeasure1PEnable: boolean
  spSkFeedbackMobileEnable: boolean
  enableCategoryTargeting: boolean
  hpTpFs2Measure1PEnable: boolean
  isInspoAdEnabled: boolean
  videoPerformanceTrackerEnable: boolean
  ipBbMultiItemsMaxAds: number
  pacSkFeedbackMobileEnable: boolean
  ipMq1FeedbackMobileEnable: boolean
  hpGalMiddleMeasure1PEnable: boolean
  hpGalMiddleDSPEnable: boolean
  typSkV3DSPEnable: boolean
  spGalMeasure3PEnable: boolean
  shpSkReqEnable: boolean
  hpGpbFs3ReqEnable: boolean
  tpSkRenderEnable: boolean
  spIbottaEnable: boolean
  hpGpbFs2RenderEnable: boolean
  isRedirectWebBrowseSponsoredVideoAdIntl: boolean
  spSvPlmtMacroReplaceEnable: boolean
  enableItemConditionChanges: boolean
  displaySpMyItems: boolean
  enableAdUnitVersion: boolean
  enableAdsBtfCmpV3: boolean
  shpMosaicSpMeasure1pEnable: boolean
  updateAdV2Query2StoreEnable: boolean
  hpPrismTpF3Measure1PEnable: boolean
  bpSingleTTO1Measure1PEnable: boolean
  tpSkReqEnable: boolean
  odpSkConfigModuleLocation: string
  hpTpFs3DSPEnable: boolean
  enableSppWebItemSponsoredProductCarouselIntl: boolean
  spSingleTTO1RenderEnable: boolean
  adsPerformanceMetricsEnable: boolean
  spSingleTTO2RenderEnable: boolean
  enableSpVideoAdLabelV1Intl: boolean
  spMq1FeedbackMobileEnable: boolean
  bpHideSBA: boolean
  phSkV3DSPEnable: boolean
  hpGpbFs1RenderEnable: boolean
  videoBtfv3Refactor: boolean
  spSvFeedbackEnable: boolean
  ipSpcHrMeasure1PEnable: boolean
  hpGpbFs3Measure3PEnable: boolean
  heropovClientAdIntl: boolean
  disableLowPriorityBeacons: boolean
  tpSvRenderEnable: boolean
  adResponseBeaconEnable: boolean
  povMrcFix: boolean
  ipGalTopRenderEnable: boolean
  hpAccHeroPov2Measure3PEnable: boolean
  hpTpFt1RenderEnableIntl: boolean
  hpTpFs3Measure1PEnable: boolean
  shpSTTO1NoAdDSP: boolean
  spSbaDesignIterationsValue: number
  hpTpFs1RenderEnable: boolean
  enableStackedRecallTracking: boolean
  hpGpbFs1FeedbackEnable: boolean
  enableMyitemsAtcSortPlacementBeacon: boolean
  videoMaxHeight: number
  dspProcessingEnable: boolean
  hpFontStyleFix: boolean
  ipBr1DSPEnable: boolean
  enableAdsPromoData: boolean
  enableSpcWPlusEA: boolean
  spGenAiSearchSvMultiItemsEnable: boolean
  spSvDisableBadges: boolean
  enableMq1InGridPosChangeGenAI: boolean
  myitemsMeasure1PEnable: boolean
  currCpSafeframeURL: string
  spSvVideoTrackingEnable: boolean
  displayAddlInfo: boolean
  spSingleTTO1Measure3PEnable: boolean
  hpPrismTpF2ReqEnable: boolean
  viewableBeaconFix: boolean
  hpGalMiddleRenderEnable: boolean
  tpSvDynamicPosEnable: boolean
  hpTpFs3ReqEnable: boolean
  hpTpFs3FeedbackEnable: boolean
  pacSkRenderEnable: boolean
  bpGalMiddleDSPEnable: boolean
  enableAtcItemClickBeaconFix: boolean
  hpTpFsAllDisableLoadingCard: boolean
  displayProductsPos: boolean
  spSvMwebLoadingFixEnable: boolean
  tpMq2Measure1PEnable: boolean
  ipBr1VideoSvelteTemplateEnable: boolean
  hpMq1DSPEnable: boolean
  bpGalBottomMeasure1PEnable: boolean
  typMq1Measure3PEnable: boolean
  enableGalleryTitle: boolean
  hpPrismTpF2DSPEnable: boolean
  skV2SbaCheckEnable: boolean
  enableHPHeroPOVAdOdnParams: boolean
  adViewableGmBeaconCheck: boolean
  tpSkV3DSPEnable: boolean
  spSbaNewBeaconAttributesEnable: boolean
  adsHotBadging: boolean
  hpGpbFs3FeedbackEnable: boolean
  enableSppMwebSearchSponsoredProductCarouselIntl: boolean
  hpPrismTpF3FeedbackEnable: boolean
  hpPrismAbF5FeedbackEnable: boolean
  bpSvMeasure1PEnable: boolean
  spSbaMeasure1PEnable: boolean
  isRedirectIntl: boolean
  ipSkV2DwebImgEnable: boolean
  ipBr1RenderEnableMWebIntl: boolean
  dspMultiProcessingEnable: boolean
  ipSkDSPEnable: boolean
  spSvRenderEnable: boolean
  ipSkEnableAdsBtfCmpV3: boolean
  spSvYabasVideoClickEnable: boolean
  ipGalTopMeasure3PEnable: boolean
  hpAccWaitForImgDwnldEnable: boolean
  hpPrismTpF2FeedbackEnable: boolean
  hpTpFs1FeedbackEnable: boolean
  adCategoryTakeoverCheck: boolean
  hpGpbFs2Measure3PEnable: boolean
  skylinedisplayadClientAdIntl: boolean
  enableVideoUIErrorState: boolean
  shpSkDSPEnable: boolean
  spMq2DSPEnable: boolean
  odpSkV3DSPEnable: boolean
  ipBr1ReqEnable: boolean
  spSvplaysInline: boolean
  cpMq1RenderEnable: boolean
  spSvLoopCompleteEventEnable: boolean
  opAllAdsEnableAdsBtfCmpV3: boolean
  ipMqEnableAdsBtfCmpV3: boolean
  ipBr1VideoDSPEnabled: boolean
  pacSkDisableTopPadding: boolean
  enableFeedbackV1: boolean
  bpSkFeedbackEnable: boolean
  adPreviewMode: boolean
  hpPrismAbF4DSPEnable: boolean
  pacSkMeasure1PEnable: boolean
  hpAccAdReqDelayTimer: number
  spSvInViewRemoveVideoData: boolean
  tpHideSBA: boolean
  enableVideoTracker: boolean
  enableIpBr1CreativeV1: boolean
  sbaCeBeaconEnable: boolean
  hpPrismAbF5Measure3PEnable: boolean
  hpAbF4Measure1PEnable: boolean
  ipSkV3DSPEnable: boolean
  spSvUiAlphaUpdate: boolean
  spSingleTTO1ReqEnable: boolean
  ipCpcRenderEnable: boolean
  bpSbaDesignIterationsValue: number
  cpSkRenderEnable: boolean
  spSvHideTabletVideo: boolean
  tpSigMeasure1PEnable: boolean
  shpSkRenderEnable: boolean
  bpSvAdsEligibleBeaconEnable: boolean
  spSkV3DSPEnable: boolean
  bpDacBottomReqEnable: boolean
  spSingleTTO2Measure3PEnable: boolean
  enableAdV3Query: boolean
  enableStreamlineBadging: boolean
  eqcSkVariantId: boolean
  hpGridPovFt1RenderEnableIntl: boolean
  bpSkFeedbackMobileEnable: boolean
  enableSPDupAdReqFix: boolean
  bpMq1DSPEnable: boolean
  sbaMwebRedesignV2Enable: boolean
  hpGalRenderEnable: boolean
  hpGpbFs1Measure3PEnable: boolean
  typMq1Measure1PEnable: boolean
  isRedirectMwebSearchBrandAmplifierAdIntl: boolean
  bpSvRenderEnable: boolean
  spSvRenderedImpressionEnable: boolean
  shpMosaicSpEnable: boolean
  spTrackingRefactorEnable: boolean
  hpAccHeroPov3Measure1PEnable: boolean
  defaultLocationZipCode: string
  bpSingleTTO2DSPEnable: boolean
  bpGalBottomMeasure3PEnable: boolean
  enableMqCreativeV1: boolean
  openRTBDisplayAdsBundleSafeframeURL: string
  typMq1DSPEnable: boolean
  shpSingleTTO2Measure3PEnable: boolean
  enableSppWebBrowseSponsoredVideoAdIntl: boolean
  enableGalleryItemChanges: boolean
  spGalBottomMeasure1PEnable: boolean
  hpPrismTpF3ReqEnable: boolean
  spSigFeedbackMobileEnable: boolean
  bpSkV2DSPEnable: boolean
  tpSbaDesignIterationsEnable: boolean
  hpPrismAbF4RenderEnable: boolean
  ipSkFeedbackMobileEnable: boolean
  tpMq2DSPEnable: boolean
  hpPrismAbF5RenderEnable: boolean
  enableIpMq2DupReqFix: boolean
  ipGalTopMeasure1PEnable: boolean
  odpSkFeedbackMobileEnable: boolean
  cpMq2RenderEnable: boolean
  spGalBottomDSPEnable: boolean
  ipSpcHrReqEnable: boolean
  enableSppMwebHomeSponsoredProductCarouselIntl: boolean
  ipGalMiddleMeasure1PEnable: boolean
  unfilledAdResponseBeaconEnable: boolean
  adsEligibilityBeaconEnable: boolean
  hpAbF5FeedbackEnable: boolean
  phSkReqEnable: boolean
  hpAbF5DSPEnable: boolean
  enableGalleryV2Design: boolean
  useLegacyBtfCmp: boolean
  triplepackClientAdIntl: boolean
  adResponseBeaconRefactorEnable: boolean
  hpTpFs2RenderEnable: boolean
  typAllEnableAdsBtfCmpV3: boolean
  hpPrismTpF2Measure1PEnable: boolean
  bpSingleTTO2Measure1PEnable: boolean
  bpMq2FeedbackMobileEnable: boolean
  spMq1DSPEnable: boolean
  enableInGridInViewBeaconFix: boolean
  tpSbaAdsEligibleBeaconEnable: boolean
  spSbaDesignIterationsEnable: boolean
  spSvExplicitIntentReqEnable: boolean
  isRedirectWebSearchSponsoredVideoAdIntl: boolean
  shpSingleTTO1Measure3PEnable: boolean
  ipSpcCar2ReqEnable: boolean
  shpSingleTTO1DSPEnable: boolean
  hpGpbFs3DSPEnable: boolean
  adsXpa: string
  contentPageClickBeaconEnable: boolean
  ipSpcCar2Measure1PEnable: boolean
  opSkEnableAdsBtfCmpV3: boolean
  bpMq2DSPEnable: boolean
  skipTpSvDynamicPosEnable: boolean
  spSvViewableBeaconEnable: boolean
  disableMrcPeriodicAdStatus: boolean
  hpAbF4RenderEnable: boolean
  spSvV2HookEnable: boolean
  bpMq1FeedbackMobileEnable: boolean
  hpGpbFs1ReqEnable: boolean
  tpSvMultiItemsEnable: boolean
  bpGalRenderEnable: boolean
  ipBrEnableAdsBtfCmpV3: boolean
  shpSingleTTO2DSPEnable: boolean
  bpSigFeedbackEnable: boolean
  ipBr1RenderEnable: boolean
  enable3pCookieBlockDetection: boolean
  updatedAdBlockerLogicEnable: boolean
  tpSvVideoTrackingEnable: boolean
  spSvLazyLoadingEnable: boolean
  pacSkReqEnable: boolean
  displayTitleEnabled: boolean
  odpSkMeasure3PEnable: boolean
  enableSppWebBrowseSponsoredProductCarouselIntl: boolean
  hpPrismAbF4Measure3PEnable: boolean
  spSkEnableAdsBtfCmpV3: boolean
  tileDisplayAdsEligibleEnable: boolean
  enableSppMwebSearchBrandAmplifierAdIntl: boolean
  shpSigMeasure1PEnable: boolean
  enableBbWPlusEA: boolean
  bpSbaReqEnable: boolean
  cpHeroPovRenderEnableIntl: boolean
  hpHeroPovRenderEnableIntl: boolean
  typSkFeedbackMobileEnable: boolean
  hpAccShowAdCardEnable: boolean
  tpSbaVariationsConfig: string
  ipSpcHrRender: boolean
  phSkFeedbackMobileEnable: boolean
  ipAllAdsEnableAdsBtfCmpV3: boolean
  typSkReqEnable: boolean
  enableCenterAlignBrandBox: boolean
  addSpVideoNaBeacon: boolean
  ipBr1MinScreenHeight: number
  spMq2FeedbackEnable: boolean
  eqcVariantIdCheckEnable: boolean
  isRedirectMwebBrowseBrandAmplifierAdIntl: boolean
  hpTpFs1ReqEnable: boolean
  enableLegalDisclaimerSponsored: boolean
  hpGalMiddleMeasure3PEnable: boolean
  enableSvTestAds: boolean
  tpSkFeedbackEnable: boolean
  bpGalReqEnable: boolean
  skV2DwebImgEnable: boolean
  spSkDSPEnable: boolean
  sbaBrandLabelEnable: boolean
  spSbaAdsEligibleBeaconEnable: boolean
  pacSkFeedbackEnable: boolean
  spSvYabasVideoModuleViewEnable: boolean
  tileAdLazyLoadConfig: string
  multiStackIndexEnable: boolean
  tpMq1Measure3PEnable: boolean
  shpSingleTTO2RenderEnable: boolean
  videoViewabilityFix: boolean
  hpTpFs1Measure1PEnable: boolean
  hpMqEnableAdsBtfCmpV3: boolean
  enableSppMwebSearchSponsoredVideoAdIntl: boolean
  spMq1FeedbackEnable: boolean
  videoCCEnable: boolean
  hpAbF4FeedbackEnable: boolean
  spSingleTTO2DSPEnable: boolean
  hpPrismTpF3RenderEnable: boolean
  hpMq2DSPEnable: boolean
  ipSkV2DSPEnable: boolean
  tpMq1FeedbackEnable: boolean
  sponsoredLabelTextColor: string
  hpPrismTpF2RenderEnable: boolean
  updateAdV2QueryUbsEnable: boolean
  ipBr1Measure3PEnable: boolean
  spSkV2DSPEnable: boolean
  hpTpFs1Measure3PEnable: boolean
  phSkRenderEnable: boolean
  hpPrismAbF5DSPEnable: boolean
  tpSkMeasure3PEnable: boolean
  enableOMIDIntl: boolean
  hpGalMeasure3PEnable: boolean
  ipGalTopReqEnable: boolean
  spGalMiddleDSPEnable: boolean
  enableMyitemsBlending: boolean
  spSvContainerEnable: boolean
  spGenAiSearchEnable: boolean
  hpAccHeroPov2FeedbackEnable: boolean
  spGalReqEnable: boolean
  hpTpFs2Measure3PEnable: boolean
  bpSingleTTO1DSPEnable: boolean
  ipBr1EarlyLoadRootMargin: number
  gridpovbannersClientAdIntl: boolean
  tpSbaDesignIterationsValue: number
  spSingleTTO2ReqEnable: boolean
  tpMq2Measure3PEnable: boolean
  revertViewabilityTimerFix: boolean
  odpSkRenderEnable: boolean
  hpGpbFs3RenderEnable: boolean
  hpGalMiddleFontChangesEnable: boolean
  tpMq1ReqEnable: boolean
  enableSppWebHomeSponsoredProductCarouselIntl: boolean
  defaultLocationStateCode: string
  typSkMeasure3PEnable: boolean
  bpSkEnableAdsBtfCmpV3: boolean
  bpSTTO1NoAdDSP: boolean
  buyBoxVariations: string
  bpGalDSPEnable: boolean
  bpSingleTTO1ReqEnable: boolean
  spSTTO1NoAdDSP: boolean
  enableSearchGalleryMaxWidth: boolean
  swapBuyboxBrandbox: boolean
  hpPrismTpF1DSPEnable: boolean
  isRedirectWebSearchBrandAmplifierAdIntl: boolean
  odpSkV2DSPEnable: boolean
  hpTpFt2RenderEnableIntl: boolean
  hpGpbFs2Measure1PEnable: boolean
  enableMyitemsSortPlacementBeacon: boolean
  display3PVisibilityCheck: boolean
  shpSkMeasure3PEnable: boolean
  sbaBannerLabelEnable: boolean
  spModularSearchAdEnable: boolean
  hpGalMiddleFeedbackEnable: boolean
  odpSkFeedbackEnable: boolean
  hpAccHeroPov2Measure1PEnable: boolean
  shpSingleTTO1ReqEnable: boolean
  displayProductPos: boolean
  tpSkV2DSPEnable: boolean
  ipGalMiddleDSPEnable: boolean
  hpTpFs3Measure3PEnable: boolean
  tpSvMeasure1PEnable: boolean
  hpAbF4ReqEnable: boolean
  odpSkConfigLazy: number
  ipBr1VideoMeasure3PEnable: boolean
  shpSkFeedbackEnable: boolean
  hpTpFs3RenderEnable: boolean
  tpMq2FeedbackEnable: boolean
  hpGpbFs2DSPEnable: boolean
  enableGalleryReRender: boolean
  enableSppMwebBrowseBrandAmplifierAdIntl: boolean
  spSearchP13nCarouselEnable: boolean
  isRedirectMwebSearchSponsoredVideoAdIntl: boolean
  enableDisclaimerIconVar1: boolean
  ipSpcEnableAdsBtfCmpV3: boolean
  typSkV2DSPEnable: boolean
  spSvMeasure1PEnable: boolean
  isSppEnabledIntl: boolean
  shpSingleTTO1Measure1PEnable: boolean
  highlyRatedCarouselEnable: boolean
  ipBr1Version: string
  spSbaReqEnable: boolean
  spSvPerformanceTrackingEnable: boolean
  ipBr1VideoAdsEligibleEnable: boolean
  spSpcEnableAdsBtfCmpV3: boolean
  hpAccHeroPov3FeedbackEnable: boolean
  tpSbaReqEnable: boolean
  spSkFeedbackEnable: boolean
  disableBottomMq2GenAI: boolean
  hpAbF4DSPEnable: boolean
  ipSpgcMeasure1PEnable: boolean
  adsQuickshopBeaconEnable: boolean
  hpGpbFs2ReqEnable: boolean
  ipBbMeasure1PEnable: boolean
  hpAbF5RenderEnable: boolean
  bpGalMeasure3PEnable: boolean
  pacSkV3DSPEnable: boolean
  spSvDynamicPosEnable: boolean
  ipSpgcRequestEnable: boolean
  enableSppWebItemBuyBoxAdIntl: boolean
  pacP13nMeasure1PEnable: boolean
  hpAccHeroPovDSPEnable: boolean
  enableBuyBoxAdInStickyContainerIntl: boolean
  hpPrismAbF5ReqEnable: boolean
  hpPrismTpF1Measure1PEnable: boolean
  ipGalTopDSPEnable: boolean
  shpSkV3DSPEnable: boolean
  hpAbF5Measure1PEnable: boolean
  hpOldPageVisitedXpa: string
  safeframeTemplatesEnable: boolean
  tpMq1RenderEnable: boolean
  tpSkFeedbackMobileEnable: boolean
  bpSkV3DSPEnable: boolean
  skV3DisplayAdsEligibleEnable: boolean
  hpPrismTpF3Measure3PEnable: boolean
  bpSbaMeasure1PEnable: boolean
  spGalBottomMeasure3PEnable: boolean
  hpGalEnableAdsBtfCmpV3: boolean
  spBbTranche2Enable: boolean
  ipBbLazyLoadingEnable: boolean
  enableSppWebSearchSponsoredVideoAdIntl: boolean
  spSearchAdStHookUpdate: boolean
  tpSbaMeasure1PEnable: boolean
  phSkMeasure3PEnable: boolean
  phSkV2DSPEnable: boolean
  hpGpbFs3Measure1PEnable: boolean
  spGenAiSbaDesignIterationsValue: number
  isRedirectWebBrowseBrandAmplifierAdIntl: boolean
  ipMq1Version: string
  brandboxdisplayadClientAdIntl: boolean
  tpMq1DSPEnable: boolean
  enableIngridOptimisedMqIntl: boolean
  spSvReqEnable: boolean
  odpSkDSPEnable: boolean
  enableSppWebSearchSponsoredProductCarouselIntl: boolean
  hpGridPovFt3RenderEnableIntl: boolean
  bpSbaAdsEligibleBeaconEnable: boolean
  hpAccHeroPov2ReqEnable: boolean
  skylineSbaCheckEnable: boolean
  sbaLogoClickEventFixEnable: boolean
  hpTpFs2DSPEnable: boolean
  ipGalMiddleMeasure3PEnable: boolean
}

export interface Wplus {
  _all_: All9
}

export interface All9 {
  cancelPageSaveOfferPre2a: string
  enableTempoPromoCodePage: boolean
  enableInHomeFTCCancellation: boolean
  hidePurchaseForCCA: boolean
  enableAddressSelector: boolean
  enableLimitedTimeOffer: boolean
  bdpRedirectForOfferCenterT2P: string
  enableInHomeDCConsent: boolean
  enableInHomeReactivationPhase2: boolean
  enableOfferCenterHideForTrialUsers: boolean
  enableLegalUpdatesPartnerPages: boolean
  enableInHome90DaysTrial: boolean
  enableInHomeRML: boolean
  partnerMlpNumberOfEncoding: number
  enableShowtimeFTCTerms: boolean
  enableDecodingForMlpPromoPage: boolean
  enableAppeasementSplashModal: boolean
  enablePlusupsReactivationCancelledActiveExpired: boolean
  enableCancelPageChatOption: boolean
  cancelPageSaveOffersPre2a: string
  enableDeliveryPassSavingsTracker: boolean
  enableOnboardingWelcomeViewCta: boolean
  enableCancellationFeedbackV2: boolean
  enablePartnerMlpDecodePromocode: string
  enableMembershipPlansEnrichedForCustomerQuery: boolean
  enableHideLTOCTAforAndroid: boolean
  enablePTABusinessMembership: boolean
  enableUpgradeToAnnualRedesign: boolean
  enableCancelPageEngagementModule: boolean
  enableAssociatePlanCancellation: boolean
  enableHideAppleFitnessCTAforAndroid: boolean
  enableManageMembershipEntryPoint: boolean
  isBenefitUpgradeConfirmationEnabled: boolean
  enableInHomeFTCAcquisition: boolean
  enableManageMembershipPageV2: boolean
  enableSsoOptionsPhoneVerification: boolean
  enablePromoStrikeThroughPrice: boolean
  enableOfferCenterT2PTestDate: number
  enableSplashSignUpUrlNavigation: boolean
  enableWcp: boolean
  enableWplusWelcomeConfirmationModalOnTYPage: boolean
  isDpManageMembershipVisible: boolean
  enableInHomeAcquisitionSplashPageSignupFromAccountPage: boolean
  enableOfferLedClipping: boolean
  enablePromoCodePageSignupConsent: boolean
  eventOffersProgramId: string
  paidSavingsThreshold: number
  enableSingleClickReactivation: boolean
  enableEventOffers: boolean
  ignoreCohortReVerification: string
  enableSpot22: boolean
  enableUnauthenticatedChoosePlans: boolean
  enable30DayTrial: boolean
  partnerLandingEntryName: string
  isEAFreeMonthsOnCancelEnabled: boolean
  enablePhoneCollectionMAOneClickPagePrograms: string
  enableTrialExtension: boolean
  enableAssistMembership: boolean
  directMembershipProgramId: string
  enableWplusWeeklyReservation: boolean
  enableGiftingErrorScreen: boolean
  enableB2B2CV1: boolean
  eventOffersProgramName: string
  enablePromoEntry: string
  enableAmexSwitchPlanDisclaimer: boolean
  enableDifferentiatedMemberExperience: boolean
  isMemberEligibleForUpgrade: boolean
  enableInHomeCancellationSurvey: boolean
  enableSingleClickReactivationWallet: boolean
  redirectUpgradeCtaToPaidProgramId: string
  enableEarlyAccess: boolean
  enableTempoMembershipLandingPage: boolean
  enableMlpImageResize: boolean
  enableDirectBusinessMembershipOffer: boolean
  enablePersonalizedSavingsA: boolean
  inHomeRedirectUrl: string
  enableWalmartPlus: boolean
  enablePersonalizedSavingsB: boolean
  enableB2B2CV1Dot1: boolean
  enableWplusSplashPage: boolean
  enablePaymentValidation: boolean
  splashPaymentErrorEnabled: boolean
  enableManageMembershipWallet: boolean
  enableManageMembershipWalletPayPal: boolean
  enableWalletForPromoCodePagePrograms: string
  enableInHomeAddressValidation: boolean
  enableDxGyPromoAutomation: boolean
  enableSingleClickReactivationWalletPayPal: boolean
  enableHubOlMigration: boolean
  enableSSRPlansPage: boolean
  disablePhoneCollectionPartnerList: string
  enableSubscription: boolean
  enablePickYourBillingDatePostMvp: boolean
  enableChoosePlansWalletPayPal: boolean
  enableMlp: boolean
  enableNoPaymentSplashPage: boolean
  enablePromoCodeValidationPrograms: string
  programData: string
  enableRAFDirectToPaid: boolean
  enableRewardsCenter: boolean
  enableEventOffersPlanExpired: boolean
  enableSplashPageWalletPayPal: boolean
  enableCohort: string
  enablePickYourBillingDate: boolean
  enableSecMlp: boolean
  splashModalDelayRequestTimeInHours: number
  enablePauseMembership: boolean
  enableInHomeAddon: boolean
  enableSplashModalAutoLaunch: boolean
  splashModalPlusUps: string
  enableOptionalPromoCodeOnBDP: boolean
  trialSavingsThreshold: number
  enablePromoCodeV1ContentPrograms: string
  enableCancellationTrialExtension: boolean
  enableExpressSignUp: boolean
  enableDunning: boolean
  wplusWeekOffers: string
  enableCashback: boolean
  enableChoosePlansWallet: boolean
  enableCancellationOlMigration: boolean
  enableSplashPageWallet: boolean
  dynamicCopyMode: string
  cohortVerifiedInHours: number
  enableConsolidationBilling: boolean
  isEAFreeMonthsOnChangeEnabled: boolean
  enableShowChatOption: boolean
  enableMultiBenefitVariations: boolean
  enabledAutoRenewUpdate: boolean
  enableSplashUIVersion: string
  enableTrialToPaid: boolean
  enableRAFSweepstakes: boolean
  enableWplusSignupOffers: boolean
  isGiftingMembershipEnabled: boolean
  enableGamification: boolean
  enableBogleSignup: boolean
  enableChamberlain: boolean
  enableReferAFriend: boolean
  isCancelBenefitEnabled: boolean
  isParamountUpgradeEnabled: boolean
  enableSSRCancelPageTempo: boolean
  hideErrorScreenPhoneCPlans: boolean
  enableWcpIdentityLogin: boolean
  enableSplashCountdownTimer: boolean
  enableStackCohortForTrialMember: boolean
  enableInHomePlansLegalA: boolean
  enableEaModules: boolean
  paramount22SsoClientId: string
  enablePageSource: boolean
  enableDealSeeker: boolean
  activateProgramId: string
  enableParamountPlus22Reactivate: boolean
  enableMembershipEngagementChallenge: boolean
  paramountEssentialPrice: string
  enableRAFPlansLegalA: boolean
  wplusWeekTrialMemberProgramId: string
  enableCvvVerify: boolean
  internalCohortVerifierName: string
  enableBDPBreadcrumb: boolean
  enableCancelPageSaveOffers2A: boolean
  enableShoppableBasket: boolean
  enablePickAPlansRedesign: boolean
  enableCancelPageSaveOffers2B: boolean
  enablePlansNoPaymentMethodErrorMessage: boolean
  enableLegalUpdates: boolean
  enablePlansLegalA: boolean
  enableWplusBookslotSplash: boolean
  enableParamountPromo: boolean
  enableCancelPageSaveOffers: boolean
  enableRemindMeLater: boolean
  enableAmexGoldSwitchPlanDisclaimer: boolean
  enablePreviewDealsOnSplash: boolean
  enableSSRCancelFeedback: boolean
  enableMembershipYearinreview: boolean
  enableCancelPageRedesign: boolean
  enableCancelPageSaveOffersUXEnhancement: boolean
  enableLegalUpdatesSplashPage: boolean
  onboardUnifiedPlanOnMAByProgramName: string
  enableReactivatedMemberWelcomeExperience: boolean
  enablePickYourBillingDatePlusUps: boolean
  enablePhoneCollectionChoosePlans: boolean
  enableBadgeShimmerAnimation: boolean
  enabledUnifiedPlanOnMA: boolean
  enableCancelPageLayout: boolean
  enablePartnerLandingPage: boolean
  isParamountUpgradeAnimationEnabled: boolean
  enableParamountCancelCTA: boolean
  enabledUnifiedPlansOnChoosePlanTempo: boolean
  enableLegalUpdatesPlansPage: string
  enableDiscountMembershipReverificationPhase2: boolean
  eaModulesAllowedPath: string
  enableCohortMembershipFastFollow: boolean
  enableBenefitEngagementPage: boolean
  enableValueProjector: boolean
  enableLegacyInHomeConfirmationForChamberlain: boolean
  enableCashBackPlans: boolean
  enableCashDashboard: boolean
  enableBadging: boolean
  enableResumeMembershipOptInDisclaimers: boolean
  paramount22RedirectUrl: string
  enableOfferListV1: boolean
  enableMemberModePersonalizationPhase2: boolean
  enableAdjustNonMemberMessaging: boolean
  enableHybridCohort: string
  enableCashbackRebrand: boolean
  enable1PVerifiedCohort: boolean
  enableBillingHistory: boolean
  enableCashbackLogoRebrand: boolean
  enableGiftingLegalA: boolean
  cancelCtaGroupVariation: string
  skipExpiredUserForcedCohortVerification: boolean
  enableRevampedBenefitsCard: boolean
  enablePhoneRecycleCheck: boolean
  enableAssistPlansLegalA: boolean
  enableCVVCheckSignUp: boolean
  enableFreeTrialDays: number
  enableMemberModeBenefitsPersonalization: boolean
  enableTempoMultiBenefit: boolean
  enabledUnifiedPlansOnCohort: boolean
  enableDiscountMembershipRevivification: boolean
  enableExpiredUserRouting: boolean
  wplusWeekPaidMemberProgramId: string
  enableAppScreenTakeOver: boolean
  enableOC22: boolean
  enableHideLTOCTAforAndroidByProgramName: string
  enableHubRedesign: boolean
  enablePausePlusUps: boolean
  enableSplashLegalA: boolean
  enableLegalUpdatesActivatePage: string
  enablePhoneCollectionSplash: boolean
  hideErrorScreenPhoneCSplash: boolean
  isAnnualPlanOfferEnabled: boolean
  enableWplusWeek: boolean
  enabledMembershipSplashTrialToPaid: boolean
  eaModulesMaxDisplayPerSession: number
  wplusWeekProgramName: string
  enableIobRevamp: boolean
  enableParamount22: boolean
  enableInHomeLandingPage: boolean
  enableCancelPageCLSNestedQuery: boolean
}

export interface Amends {
  _all_: All10
}

export interface All10 {
  enableWcpAmendEditItem: boolean
  enableAmendsStartNewOrder: boolean
  enableGdiPhaseTwo: boolean
  enableIntentControl: boolean
  enablePassCartId: boolean
  enableDelaySparkShopperEnhancedExp: boolean
  enableEditItemsSubscriptionDiscountMsg: boolean
  enableAmendsBannerForThankYouPage: boolean
  disableGetAmendableOrderQueryRefetchOnFocus: boolean
  enableReshopV2: boolean
  enableFatovCartFulfillmentOptions: boolean
  enableAcceptRejectSubstitutionsV2: boolean
  enableFrChangesForEditPage: boolean
  disableStartNewOrderForScGroupOnly: boolean
  enablePassDelayState: boolean
  enableWcpAmendAddToOrder: boolean
  useAmendableGroupId: boolean
  enableAmendsCartFulfillmentOption: boolean
  enableCartSubscriptionDiscountMsg: boolean
  enableWcpAmendReservation: boolean
  enableEditPaymentsOnCancel: boolean
  enableSearchPageFatov: boolean
  enableEditPayment: boolean
  enableRescheduleOnCancel: boolean
  enableAmendTY: boolean
  enableStartOrderLink: boolean
  enableSubs: boolean
  enableHomePageFatov: boolean
  enableEditAddress: boolean
  itemCountToEnableFatov: number
  enableItemPageFatov: boolean
  enableAddItems: boolean
  enableBrowsePageFatov: boolean
  enableEditOrderSubs: boolean
  enableEditItemsOnCancel: boolean
  enableFilterFatov: boolean
  enableReviewFatov: boolean
  enableCustomerChoice: boolean
  enableAmendableOrder: boolean
  enableEmptyCartBanner: boolean
  enableAddItemsPageFatov: boolean
  enableMyItemsPageFatov: boolean
  enableVerifyAmendableCart: boolean
  enableEPP: boolean
  enableFatovErrorHandling: boolean
  enableFloatingAddToOrder: boolean
  enableStartOrderLinkv2: boolean
  enableAddToOrderPharmacy: boolean
  enableEditStoreDeliveryAddress: boolean
  enableEditAddressOnCancel: boolean
  enableRegistryPageFatov: boolean
  enableSubscriptionsFtc: boolean
  enableThankYouAmendsBannerForExpressSlots: boolean
  pharmacyScheduledDelivery: boolean
  enableListsPageFatov: boolean
  enableShopPageFatov: boolean
  enableEditPickupStore: boolean
  enableCategoryPageFatov: boolean
  enableEditPickupStoreOnCancel: boolean
  enableEditDeliveryAddressOnCancel: boolean
  enableUpdatedTempHold: boolean
  enableAddToOrderSubscriptions: boolean
}

export interface Search {
  _all_: All11
}

export interface All11 {
  enableShopSimilarP13NData: boolean
  scrolledPaginationCount: number
  enableLimitedLinesInApparelTitle: boolean
  enableInpDelayRouterTransitionForOneFrame: boolean
  preserveFulfillmentMethodInstore: boolean
  enableAnalyticsForPaginationClickInSBPages: boolean
  enableFulfillmentAwareSearch: boolean
  enableSecondaryDollarSavingsBadge: boolean
  enableSeeSimilar: boolean
  enableExactMatch: boolean
  enableInRiverMiddleTokens: boolean
  enableSearchDollarSavingsBadge: boolean
  enableProductTileRedesignBadge: boolean
  removeMwebListDwebGridWhiteSpace: boolean
  isGreyBackgroundV3Enabled: boolean
  enableAdditionalSearchDepartmentAnalytics: boolean
  isGreyBackgroundV1Enabled: boolean
  fuelTypeEnabled: boolean
  showAROpticalBadge: boolean
  enableSwipeableImages: boolean
  searchDataQueryLimit: number
  enableSeoHeaderTitleOverride: boolean
  enableSuppressTitle: boolean
  enableProductTileRedesignAttributes: boolean
  enableMwebFashionGridViewEnhancement: boolean
  enableGenaiCompare: boolean
  enableItemLimits: boolean
  enablePap: boolean
  enableShopSimilarCTAAnimation: boolean
  enableProductTileRedesign: boolean
  disableSpeedFilterGICEnabled: boolean
  enableFulfillmentAwareSearchHOT: boolean
  enableDollarSavingsBadgeForDesktop: boolean
  enableCachingOnEmptyResultsForBrowseAndSearch: boolean
  enableMSP: boolean
  enableSuggestedTokenV2: boolean
  enableSuggestedTokenV1: boolean
  enableExpandedAtcClickRegion: boolean
  enableSuggestedTokenV3: boolean
  enableShopSimilarBottomSheet: boolean
  enableItemStackLazyLoadWithIO: boolean
  enableItemStackPostalCodeAnalytics: boolean
  enableShopByModuleEnhancements: boolean
  enableSeoMetaDescOverride: boolean
  enableLowInventoryBadge: boolean
  enableHotBadge: boolean
  enableGenericSeoFAQ: boolean
  enableLocalizedFacetName: boolean
  enablePersistsearchqueryTypeahead: boolean
  enableReducedVariantList: boolean
  enableInStoreShelfMessage: boolean
  enableSingleIOForItemStack: boolean
  searchMwebFashionGridViewImageSizeVariation: number
  productTileRedesignPricePos: number
  enableFiveColumnView: boolean
  enablelnpFilterWaitUntilNextFrame: boolean
  enableProductTitleBrandDedupe: boolean
  enableItemListSchema: boolean
  enableCatNavA: boolean
  enableNewTabProductTileClickToItemPage: boolean
  enableSeoLangUrl: boolean
  defaultNoOfQuestionsToShow: number
  enable500SearchServiceErrorUI: boolean
  getSpellCheckFromSearchService: boolean
  newEaOosMessage: string
  enableTrendingCatNav: boolean
  enableDealsErrorRedirect: boolean
  enableSPItemTileOptions: boolean
  enableBrowseErrorRedirect: boolean
  enableSearchHotBadgeV1: boolean
  enableSearchHotBadgeV2: boolean
  enableMaxOrderQuantity: boolean
  priceDisclaimerLink: string
  enableMwebFashionGridViewSupressBadges: boolean
  disableCheckfit: boolean
  enableImageResize: boolean
  enableGenAI: boolean
  enableProductTileRedesignImage: boolean
  enableSingleFacetVariant: boolean
  enableCleanPrice: boolean
  enableCompareCTAVarity: boolean
  removeDwebGridWhiteSpaceV2: boolean
  enableEaOosEnhancement: boolean
  enableMediumSizeAtc: boolean
  enableGreenPriceForSpecialBuyItems: boolean
  disableColorSwatch: boolean
  enableIntlLowInStock: boolean
  enableLegalTextPricingDisclaimer: boolean
  enableSocialProofRepositioning: boolean
  customPageSize: number
  enableReducedItemData: boolean
  subscriptionVariation: number
  disableFacetBaseSEOUrls: boolean
  removeItemTileGridViewWhiteSpace: boolean
  enableCatNavPageViewSuppression: boolean
  productTilePricePos: number
  swipeableImageExperience: string
  splitDataCallLimit: number
  enableExternalInfoUrl: boolean
  atfDwebGridCount: number
  enableFlattenedFitment: boolean
  enableHotPac: boolean
  fitmentTopicPageEnable: boolean
  mwebGridProductCount: number
  enableNewPriceFormatType: number
  enableItemStackLazyLoading: boolean
  enablePortableFacets: boolean
  enableAutoLightsExperience: boolean
  enableVariantsPagination: boolean
  extendedAttributesEnabled: boolean
  showARExperienceBadging: boolean
  enableSearchPageSSR: boolean
  enableFacetedFilterBarVarC: boolean
  enableShopByModule: boolean
  enableMaxWidth: boolean
  enableTopNavUpdateGQLCall: boolean
  enableFIDLogging: boolean
  enableSubscriptionFeature: boolean
  subscriptionHeaderImage: string
  enableGoldenReview: boolean
  enableFacetedFilterBar: boolean
  enableAspectRecommendation: boolean
  enableFacetExpansion: boolean
  viewportThresholdMobile: number
  enablePAC: boolean
  dwebGridProductCount: number
  subscriptionZeroPercentDiscountBadgeEnabled: boolean
  enableLeftHandNav: boolean
  atfMwebListCount: number
  enableGIC: boolean
  enableLCPSingleImagePrefetch: boolean
  tileTakeOverSearch: boolean
  enableLCPHighFetchPriority: boolean
  enableVariantItemSmile: boolean
  enableLHNCategoryTree: boolean
  lcpImageQuality: string
  enableSimilarItems: boolean
  tileTakeOver: boolean
  enableDynamicFitment: boolean
  bannerModulesEnableSearch: boolean
  omitSortFacetParam: boolean
  hideProductTileWhiteSpace: boolean
  enableNewStackedRecallNoResult: boolean
  threeColumnGrid: boolean
  enableFashionTopNav: boolean
  enableTopNavItemStack: boolean
  enableFulfillmentBadge: boolean
  enableFacetCount: boolean
  enableNUpsSearch: boolean
  enableGrapqlQueryParams: boolean
  enableRemoveEmptyProductFlagRows: boolean
  enableViewportThreshold: boolean
  enableSearchSkinnyBanner: boolean
  viewportThresholdDesktop: number
  enablePaginationIO: boolean
  showFilterTooltip: boolean
  smileVariation: number
  enableOLImageSize: boolean
  fitmentModulesEnable: boolean
  mwebListProductCount: number
  enableStickyDisclaimerBar: boolean
  enableAOSPanel: boolean
  enableLHNFilterUpdateGQLCall: boolean
  enableShopWithoutVehicle: boolean
  enableValuePricing: boolean
  enableColorSwatch: boolean
  enableRemovePadding: boolean
  enableSearchHotBadge: boolean
  enableDeprioritizeTailImages: boolean
  enableAOS: boolean
  removeLHNDuplicates: boolean
  listViewEnum: number
  topicPageSortBy: string
  enableSplitDataCall: boolean
  bannerModulesEnable: boolean
  clientFetchTimeoutMs: number
  enableSecondaryStackType: number
  enableRemoveEmptyProductVariantRows: boolean
  enableItemDetailsPricingDisclaimer: boolean
  pageSize: number
  productTile2xImageDimensions: string
  enableTopicPageToDGF: boolean
  enableDynamicFilters: boolean
  clothingSizeFacetEnhancementsVariation: number
  enableWPlusBadgeByCategories: string
  enableProductTile2xImageDimension: boolean
  enableBrowsingHistory: boolean
  enableRelatedSearchHorizontalPills: boolean
  enableAddOnServices: boolean
  enableIdForSearchFacet: boolean
  enablePricingDisclaimer: boolean
  searchPageBuyNowType: number
  enableLimitedLinesInTitles: boolean
  enableAccInstallation: boolean
  enableStylesheetsForInlineStyles: boolean
  enableRelatedSearches: boolean
  enableWPlusBadge: boolean
  enableAffirmBadge: boolean
  skipGICIntent: boolean
  enableSwatchesOnTopicPage: boolean
  enableGridLayoutForFashion: boolean
  discoveryTopicABUrls: string
  enableIntersectedSearchResults: boolean
  enableTopicDiscoveryPhase: boolean
  interesectedResultsBottomMargin: number
  enableInRiverNudge: boolean
  enableNUps: boolean
  enableLimitedLinesInTitlesByCategories: string
  enableVisionCenterBadgeSearch: boolean
  enableSingleItemTopResult: boolean
  enableVariantDynamicText: boolean
  enableEaViolatorBannerV2: boolean
  enableHighResImagesForSearch: boolean
}

export interface Identity {
  _all_: All12
}

export interface All12 {
  hideIdentityProfileOtherInfo: boolean
  hideFullNameEditBtn: boolean
  suppressEmailOtpOnSignInList: string
  showMarketingEmailCheckbox: boolean
  w2WalmartOnePageRedirectEnabledFor: string[]
  clientIdToClientMapping: string[]
  enablePhoneSigninComponents: boolean
  gepEligibleCountries: string
  isEmailVerificationEnabled: boolean
  enablePhoneAdministrationForProfile: boolean
  shouldUseUpdatePasswordMutation: boolean
  mobileAlertTermsLink: string
  enableWcpMode: boolean
  requestUserToUpdateApp: boolean
  enablePasskeySignIn3P: boolean
  enableEmailTrimSignIn: boolean
  enablePasskeyRegistrationProfile: boolean
  enableWcpProfileFlow: boolean
  hideOneInfoScreen: boolean
  enableProfileSecondLastName: boolean
  enableClaimAccount: boolean
  enableSecondLastName: boolean
  verifyPhoneBeforeEnrole2FA: boolean
  enablePhoneCollectorOnSignIn: boolean
  enablePrePopulateLoginId: boolean
  phoneCollectionEnabledFor: string[]
  enableIdentityWcpFlow: boolean
  enableFooterFromTempo: boolean
  hideMobileAlertTerms: boolean
  enableStepupChoiceInMobileVerification: boolean
  enablePasskeyDeeplink: boolean
  gepUserBusinessUnit: string
  isValidateTokenEnabled: boolean
  rememberMeDisabledFor: string[]
  domainsForSessionSharing: string
  enablePreventConfirmedPhone: boolean
  shouldIncludePhoneInfoInSignIn: boolean
  enableRedictToCustomSignupURL: boolean
  enableCashiLinkingForSignUp: boolean
  enableTermsAndConditionsCheck: boolean
  enableSignupPhoneOptional: boolean
  hideNotNowButtonOfUpdateCorrection: boolean
  enableMandatoryOtp: boolean
  enablePasskeySignIn: boolean
  forceAutoCorrectionOnSignUp: boolean
  gepUserBuinessUnit: string
  enableNationalId: boolean
  disablePhoneInputFieldInSignUp: boolean
  enablePVOtpCOperation: boolean
  ssoClientIdList: string[]
  enableMartInstrumentation: boolean
  middleNameRequiredFor: string[]
  enableAlertsForBusinessWalmart: boolean
  enableTenantWcpMode: boolean
  enablePasskeySignInStepUpVar2: boolean
  isWCPSecondaryPhoneEnabled: boolean
  enableCashiLinkingForSignIn: boolean
  enableIdentityGEPExperience: boolean
  wcpClientList: string
  skipPhoneCollectionForDays: number
  enablePasskeyRegistration: boolean
  useSignInV2: boolean
  authReturnUrlWcp: string
  enablePhoneOtpTimer: boolean
  loginWithEmailOtpChoiceEnabledFor: string[]
  enableMultiCellOTPView: boolean
  addLocaleInIdentityPathUrl: boolean
  enablePhoneSignin: boolean
  w2WalmartOnePageRedirectTimeInterval: number
  enablePhoneCollectorOnSignInWithPassword: boolean
  enableSignInPreferenceSection: boolean
  shouldInvalidateQueryForProfile: boolean
  enableCashiLinking: boolean
  enablePasskeySignInStepUp: boolean
  enableSessionSharingDomains: string
  useIdentityModifyProfileName: boolean
  enableWhitelistDomainWcpLogout: boolean
  rateLimitErrorRetryTime: number
  isRememberMeEnabledFor: string[]
  enablePhoneNumberOnPersonalInfo: boolean
  showPhoneInputWithDropdown: boolean
  showNotNowOnPhoneCollectorOtpView: boolean
  whitelistDomainForLogoutReturnUrl: string
  enableSkipForgotpasswordPageForFYP: boolean
  enablePwdPolicyWithNumOrSpecialChar: boolean
  signUpErrorCodeList: string
  enablePhoneCollectorOnSigninEmailOTP: boolean
  enableWithTrustedSession: boolean
  redirectToPasswordPage: boolean
  identityDomain: string
  transactionSource: string
  enablePwdPolicy: boolean
  transactionalTpValues: string
  enablePasswordLess: boolean
  enable2FA: boolean
  enablePhoneCollectorOnSignUp: boolean
  showMergeSignup: boolean
  enableEmailOtpPhoneAvailable: boolean
  isContentLayoutGuestEnabled: boolean
  enablePhoneAdministrationForFYP: boolean
  enableAuthFramePerf: boolean
  enableOneTapSignInLandingPages: boolean
  enablePwdPolicyWithNumAndSpecialChar: boolean
  enableEmailOtpPhoneNotAvailable: boolean
  isGlassFrameEnabled: boolean
  enableNonceForAuthFrame: boolean
  enableOneTapSignIn: boolean
  enableOpenRedirectProtection: boolean
  enableCsrTransitions: boolean
  enableUpdateEmailWithPhoneOTP: boolean
  enablePhoneCollectorOnSignUpForAllFlows: boolean
  frameRedirectOnFailure: boolean
  enablePhoneCollectorOnFYP: boolean
  enablePhoneAdministrationForSignUp: boolean
  enableLoggedInRedirect: boolean
  enableWPlusSplashScreen: boolean
  enableConsentRedirects: boolean
  consentClientList: string
  enablePhoneAdministrationForSignIn: boolean
  identityNextTenants: string
  frameMaxLoadTime: number
  enableGetResetOptions: boolean
  oneTapOptOutExpireTime: number
  oneTapAllowList: string
  oidcRedirectionVidList: string[]
  disablePhoneCollByClientId: string
  disableMandatoryOtpForClientIDList: string[]
  thirdPartyClientList: string[]
}

export interface ShippingCountryCode {
  data: Data4
}

export interface Data4 {}

export interface Membership {
  data: Data5
}

export interface Data5 {
  shouldShowWplusLogo: boolean
}

export interface PersistedQueriesConfig {
  allowList: string[]
  blackList: string[]
  enableAllowList: boolean
  enablePersistedQueries: boolean
}

export interface DehydratedSearchCv {
  enableLCPHighFetchPriority: boolean
  enableLCPSingleImagePrefetch: boolean
}

export interface CountryRegion {
  countryCode: string
  regionCode: string
}

export interface ErrorLoggingConfig {
  enableErrorLogging: boolean
}

export interface RuntimeConfig {
  nxApplicationName: string
  isDev: boolean
  enableLatencyTrace: boolean
  tenant: string
  vid: string
  tenantV2: TenantV2
  mockURL: string
  mock: boolean
  endpointMappings: EndpointMappings
  googleMaps: GoogleMaps
  membershipConfig: MembershipConfig
  pulseBeacon: PulseBeacon
  perimeterX: PerimeterX
  identity: Identity2
  oidcParams: OidcParams
  threatMetrix: ThreatMetrix
  wmtPaymentsPageUrl: string
  wmtPaymentsChooserPageUrl: string
  wmtWalletPageUrl: string
  ads: Ads2
  moatIvt: string
  rewardsTravelUrl: string
  host: Host2
  fs: Fs
  appVersion: string
  appSha: string
  profile: string
  tmxOrgId: string
  dataCenter: string
  queryContext: QueryContext
}

export interface TenantV2 {
  bu: string
  mart: string
}

export interface EndpointMappings {
  operations: Operations
  queryStrings: QueryStrings
  pages: Pages
}

export interface Operations {
  "query configuration": string
  "query RewardsHistoryPage": string
  "query ContentPage": string
  "query BrandPage": string
  "query checkItemCartEligibility": string
  "mutation MergeAndGetCart": string
  "query getGuestOrder": string
  "query PurchaseHistory": string
  "query PurchaseHistoryV2": string
  "query getCheckinEligibleOrders": string
  "query GetGuestCheckInOrder": string
  "mutation createTrip": string
  "mutation updateParking": string
  "mutation markArrivalManually": string
  "mutation modifyCheckin": string
  "mutation getStatus": string
  "mutation NotifyCapOneBannerSnooze": string
  "mutation CancelOrder": string
  "query LastCallPage": string
  "query AdV2Display": string
  "query GetCommPreference": string
  "query PurchasedProtectionPlans": string
  "query PurchasedProtectionPlansV2": string
  "query ProtectionPlanDetail": string
  "query subscriptions": string
  "query NodeDetailQuery": string
  "query NearbyNodesQuery": string
  "query GetFuelPrices": string
  "query LocalStoreContentQuery": string
  "query CartSubstitutions": string
  "query CartShopSimilar": string
  "query GetEarlyAccessLearnMoreData": string
  "query PostCartLoadPage": string
  "query SearchStore": string
  "query LocalStoreCategoryContent": string
  "query nodeDetails": string
  "query storeFinderNearbyNodesQuery": string
  "query StorePagesStoreDirectoryQuery": string
  "mutation CreateInsuranceSalesLead": string
  "mutation setPickup": string
  "query getCart": string
  "query feedShowCategories": string
  "query feedsByStatus": string
  "query feedShow": string
  "query feedsByStatusPaginated": string
  "query SavingsDashboard": string
  "query pickupAvailability": string
  "mutation updatePickupSchedule": string
  "mutation cancelReturnOrder": string
  "query returnDetails": string
  "query guestReturnDetails": string
  "query registrantReturnDetails": string
  "query generateLabel": string
  "query GetDeliveryPreferences": string
  "query LensCustomizationProductIdmlQuery": string
  "mutation CreateServiceAppointment": string
  "mutation createHealthBenefitCard": string
  "mutation updateServiceContractContactPerson": string
  "mutation placeServiceOrder": string
  "query fetchPasskeys": string
  "query RxReadyNudgeDataByPrefIdQuery": string
  "mutation SignInV2": string
  "mutation SignIn": string
}

export interface QueryStrings {
  "step=cart": string
  "step=bookslot": string
  "entitytype=*": string
  "state=*": string
  "source=*": string
  "intent=acc": string
}

export interface Pages {
  "*": string
  "/": string
  "/hp-redesign": string
  "/404": string
  "/acc/[id]": string
  "/acc/servicedetails/*": string
  "/acc/schedule-oil-change": string
  "/account/*": string
  "/all-departments": string
  "/departments-list": string
  "/browse/*": string
  "/c/[...seo]": string
  "/c/auto-directory/*": string
  "/ci-control": string
  "/cp/[...categoryParams]": string
  "/content/[...categoryParams]": string
  "/brand/[...brandParams]": string
  "/brand/branddirectory": string
  "/help/*": string
  "/i/*": string
  "/ip/[...itemParams]": string
  "/lists/*": string
  "/my-items": string
  "/my-registries": string
  "/my-reviews/*": string
  "/shop/*": string
  "/shop/[...seo]": string
  "/nonprofits/*": string
  "/orders/[orderId]/returns*": string
  "/orders/*": string
  "/guestcheckin/*": string
  "/partner/plus/*": string
  "/plus/*": string
  "/wp/*": string
  "/product/[...itemParams]": string
  "/registry/*": string
  "/reviews/*": string
  "/search/*": string
  "/seller/*": string
  "/services": string
  "/store": string
  "/store/[storeId]": string
  "/store/[storeId]/[...contentType]": string
  "/sparkgood/*": string
  "/organizations/*": string
  "/thankyou": string
  "/thankyou/pindrop": string
  "/topic/[...seo]": string
  "/tp/*": string
  "/update-payment-method-form": string
  "/update-payment-method": string
  "/wallet/associate-discount": string
  "/subscriptions/manage/*": string
  "/subscriptions/replenishment/*": string
  "/cart": string
  "/pac": string
  "/updatecart": string
  "/shopwithme/*": string
  "/rewards-history": string
  "/global/*": string
  "/global/[...seo]": string
  "/live": string
  "/live-next": string
  "/live-next/browse": string
  "/savings": string
  "/cash-overview": string
  "/in-store-wifi/*": string
  "/live-next/shows": string
  "/g/*": string
  "/g/[...seo]": string
  "/gic": string
  "/fittingroom": string
  "/protection-plans": string
  "/inhome/*": string
  "/user-query": string
  "/assistant": string
  "/showroom": string
  "/showroom/[name]/[id]": string
  "/omniservicesplatform": string
  "/orders": string
  "/value-projector": string
  "/shoppable-basket": string
  "/shopwithfriends-lp": string
  "/shopwithfriends-lp/fashion": string
  "/register": string
  "/register/password": string
  "/join": string
  "/join/[tier]": string
  "/share": string
  "/compare": string
  "/ai-demo": string
  "/reels": string
  "/creator/*": string
  "/creator/[...seo]": string
  "/localfinds/*": string
  "/shop-similar-items": string
  "/shop-similar-items/[id]": string
}

export interface GoogleMaps {
  checkAddressAPIKey: string
  addressAPIKey: string
  geoCodingAPIKey: string
  riseMapAPIKey: RiseMapApikey
  countryCode: string
}

export interface RiseMapApikey {
  dev: string
  defaultKey: string
}

export interface MembershipConfig {
  showWPlusBanner: boolean
}

export interface PulseBeacon {
  enable: boolean
  hostname: string
  bd: string
  bh: string
  hostWithQM: string
  hostWithoutQM: string
  photoHost: string
  photoHostWithoutQM: string
}

export interface PerimeterX {
  enable: boolean
  initScript: string
  pxAppId: string
}

export interface Identity2 {
  context: Context
  authFrameRoutes: AuthFrameRoutes
}

export interface Context {
  signOutUrl: string
  signInPathname: string
  createAccountPathname: string
  tenants: Tenant[]
  marketingEmails: boolean
  rightsReservedText: string
  footerOptions: any[]
  termsLink: string
  privacyLink: string
  enableRobotsTag: boolean
  hideFooter: boolean
  csrDisabledPaths: any[]
  shouldSkipPhoneCollectionForDays: boolean
  disableVerifyLaterPage: boolean
  successPathName: string
  selectPhoneNumberPathName: string
  verifyItsYouPageByOtpPathName: string
  updatePhoneNumberPathName: string
  verifyItsYouPage: string
  defaultCountryCode: string
  defaultCountryISOCode: string
  createMembershipPathName: string
}

export interface Tenant {
  host: Host
  mart: string
  templates: string[]
}

export interface Host {
  stage: string
  teflon: string
  production: string
}

export interface AuthFrameRoutes {
  frame: string
  reauthFrame: string
  gxoSignup: string
  gxoSignin: string
}

export interface OidcParams {
  clientId: string
  scope: string
  tenantId: string
  redirectUri: string
  profile: string
  isDev: boolean
}

export interface ThreatMetrix {
  enable: boolean
  allowedPathRules: string[]
}

export interface Ads2 {
  env: string
  host: string
  beaconService: string
  moatId: string
  moatVideoId: string
}

export interface Host2 {
  wmt: string
  paymentsWalletWmtHost: string
}

export interface Fs {
  orgId: string
  appHost: string
  host: string
  script: string
}

export interface QueryContext {
  appVersion: string
  gql: Gql
  rest: Rest
}

export interface Gql {
  endpointsByName: EndpointsByName
}

export interface EndpointsByName {
  ceaccount: string
  cecxo: string
  cecph: string
  adsgateway: string
  aroundme: string
  ceorders: string
  cecustomercheckin: string
  cegateway: string
  cegatewayIdp: string
  ceaccounthw: string
  cepdp: string
  wellness: string
  hwcegateway: string
  cereturns: string
}

export interface Rest {
  endpointsByName: EndpointsByName2
}

export interface EndpointsByName2 {
  ceaccount: string
  cehelp: string
  cehelpchat: string
  ceidentity: string
  unifiedTypeahead: string
  typeahead: string
  espvalidation: string
  warppaymentoptions: string
  cewarp: string
  ceccm2: string
  ceccm2_intlwcp: string
  cewireless: string
  storeservices: string
  fuelPrices: string
  feedbackSubmit: string
  quimbyMobile: string
  shopwithme: string
  signatureGenerate: string
  atmtFeedback: string
  pegasus: string
}
