'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
'            Module Name             :   My Teamcenter
'
'            Testcase Name           :   (Smoke) Part type (Part, Raw Material and Support Part)
'
'            Test Objective         :   Part type (Part, Raw Material and Support Part)
'
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
'            Developer Name          |       Date                |   Teamcenter Release      |  Reviewer
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
'            Mohini Deshmukh          |       10-January-2017       |   Teamcenter 11.2          |   Sandeep Navghane
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Option Explicit
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
'Initialize Testcase
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
LoadAndRunAction "FMW_Setup\FMW_Setup_TestcaseInit","FMW_Setup_TestcaseInit", oneIteration
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
'Step No.        : Step 1
'Description     : Login into teamcenter as engineer user
'Expected result : Login should be successful
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
GBL_STEP_DESCRIPTION="Login into teamcenter as engineer user"
GBL_STEP_EXPECTED_RESULT="Login should be successful"
Call Fn_LogUtil_PrintStepHeaderLog(GBL_STEP_NUMBER,GBL_STEP_DESCRIPTION,GBL_STEP_EXPECTED_RESULT)

LoadAndRunAction "RAC_LoginUtil\RAC_LoginUtil_ReuseTcSession","RAC_LoginUtil_ReuseTcSession",OneIteration,True,True,"","TestUser2ProductEngineeringEngineeringInternalProductEngineer","","plmlauncher",""

'Set Reset perspective
LoadAndRunAction "RAC_Common\RAC_Common_SetResetPerspective","RAC_Common_SetResetPerspective",OneIteration,"My Teamcenter",True,True

'Create test case folder
LoadAndRunAction "RAC_Common\RAC_Common_CreateTestCaseFolder","RAC_Common_CreateTestCaseFolder",OneIteration,"","",""

'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
'Step No.        : Step 2
'Description     : Go to File->New->Item and select Engineered Part
'Expected result : Part creation wizard should be open with attributes as:ID,Revision,Engineering Part Counter,Name,Description,Intended tooling Maturity,Material Classification,3D Design Required,Company Make Buy,Legacy Part Number,Assembly,Row,Product configuration,Drive Configuration,Fore/Aft,Up Down.Cross Car,Relative Possition, Occupant Position,Drive train,Options, Drawing Type, Is color type
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
GBL_STEP_DESCRIPTION="Go to File->New->Item and select Engineered Part"
GBL_STEP_EXPECTED_RESULT="Part creation wizard should be open with attributes as:ID,Revision,Engineering Part Counter,Name,Description,Intended tooling Maturity,Material Classification,3D Design Required,Company Make Buy,Legacy Part Number,Assembly,Row,Product configuration,Drive Configuration,Fore/Aft,Up Down.Cross Car,Relative Possition, Occupant Position,Drive train,Options, Drawing Type, Is color type"
Call Fn_LogUtil_PrintStepHeaderLog(GBL_STEP_NUMBER,GBL_STEP_DESCRIPTION,GBL_STEP_EXPECTED_RESULT)
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
'Step No.        : Step 3
'Description     : Enter the fields and click on Finish
'Expected result : Engineered Part should be created successfully
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
GBL_STEP_DESCRIPTION="Enter the fields and click on Finish"
GBL_STEP_EXPECTED_RESULT="Engineered Part should be created successfully"
Call Fn_LogUtil_PrintStepHeaderLog(GBL_STEP_NUMBER,GBL_STEP_DESCRIPTION,GBL_STEP_EXPECTED_RESULT)

'Verify all atrributes on engg part creation window
dictItemInfo.RemoveAll
dictItemInfo("PropertyLabel")="EngineeredPart_CreationPageExistingPropertyNames"
LoadAndRunAction "RAC_Common\RAC_Common_CreateItem","RAC_Common_CreateItem",OneIteration,"verifypropertylabels","ItemType_EngineeredPart","menu","myteamcenter",""
	
'create engg part with all fields
LoadAndRunAction "RAC_Common\RAC_Common_CreateItem","RAC_Common_CreateItem",OneIteration,"createautoengineeredpartwithallfields","","nooption","myteamcenter",""

LoadAndRunAction "RAC_MyTeamcenter\RAC_MyTc_NavigationTreeOperations", "RAC_MyTc_NavigationTreeOperations", oneIteration, "Expand",GBL_TESTCASE_FOLDER_PATH,""

'verify engg part should be created
LoadAndRunAction "RAC_MyTeamcenter\RAC_MyTc_NavigationTreeOperations", "RAC_MyTc_NavigationTreeOperations", oneIteration, "VerifyExist",GBL_TESTCASE_FOLDER_PATH & "~" & DataTable.Value("RACItemNode","Global"),""

'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
'Step No.        : Step 4
'Description     : Again Go to File->New->Item and select Support Design
'Expected result : Design creation wizard should be open with attributes as:ID,Revision,MFK Counter,Name,Description,Design type
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
GBL_STEP_DESCRIPTION="Again Go to File->New->Item and select Support Design"
GBL_STEP_EXPECTED_RESULT="Design creation wizard should be open with attributes as:ID,Revision,MFK Counter,Name,Description,Design type"
Call Fn_LogUtil_PrintStepHeaderLog(GBL_STEP_NUMBER,GBL_STEP_DESCRIPTION,GBL_STEP_EXPECTED_RESULT)

'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
'Step No.        : Step 5
'Description     : Enter the fields and click on Finish
'Expected result : Support Design should be created successfully
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
GBL_STEP_DESCRIPTION="Enter the fields and click on Finish"
GBL_STEP_EXPECTED_RESULT="Support Design should be created successfully"
Call Fn_LogUtil_PrintStepHeaderLog(GBL_STEP_NUMBER,GBL_STEP_DESCRIPTION,GBL_STEP_EXPECTED_RESULT)

'Verify all atrributes on support design creation window
dictItemInfo.RemoveAll
dictItemInfo("PropertyLabel")="SupportDesign_CreationPageExistingPropertyNames"
LoadAndRunAction "RAC_Common\RAC_Common_CreateItem","RAC_Common_CreateItem",OneIteration,"verifypropertylabels","ItemType_SupportDesign","menu","myteamcenter",""

'createsupport design with all fields
LoadAndRunAction "RAC_Common\RAC_Common_CreateItem","RAC_Common_CreateItem",OneIteration,"createautosupportdesignwithallfields","","nooption","myteamcenter",""

'verify engg part should be created
DataTable.SetCurrentRow 2
LoadAndRunAction "RAC_MyTeamcenter\RAC_MyTc_NavigationTreeOperations", "RAC_MyTc_NavigationTreeOperations", oneIteration, "VerifyExist",GBL_TESTCASE_FOLDER_PATH & "~" & DataTable.Value("RACItemNode","Global"),""

'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
'Exit From Test Case
'- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
LoadAndRunAction"FMW_Setup\FMW_Setup_TestcaseExit","FMW_Setup_TestcaseExit", oneIteration,"RAC",True

Call Fn_ExitTest()

Function Fn_ExitTest()
 ExitTest
End Function

