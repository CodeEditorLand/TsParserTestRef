// Copyright (c) Microsoft. All rights reserved. Licensed under the Apache License, Version 2.0.
// See LICENSE.txt in the project root for complete license information.

///<reference path='typescript.ts' />

module TypeScript {
	export function hasFlag(val: number, flag: number) {
		return (val & flag) != 0;
	}

	export enum ErrorRecoverySet {
		None = 0,
		Comma = 1, // Comma
		SColon = 1 << 1, // SColon
		Asg = 1 << 2, // Asg
		BinOp = 1 << 3, // Lsh, Rsh, Rs2, Le, Ge, INSTANCEOF, EQ, NE, Eqv, NEqv, LogAnd, LogOr, AsgMul, AsgDiv
		// AsgMod, AsgAdd, AsgSub, AsgLsh, AsgRsh, AsgRs2, AsgAnd, AsgXor, AsgOr, QMark, Mult, Div,
		// Pct, GT, LT, And, Xor, Or
		RBrack = 1 << 4, // RBrack
		RCurly = 1 << 5, // RCurly
		RParen = 1 << 6, // RParen
		Dot = 1 << 7, // Dot
		Colon = 1 << 8, // Colon
		PrimType = 1 << 9, // number, string, boolean
		AddOp = 1 << 10, // Add, Sub
		LCurly = 1 << 11, // LCurly
		PreOp = 1 << 12, // Tilde, Bang, Inc, Dec
		RegExp = 1 << 13, // RegExp
		LParen = 1 << 14, // LParen
		LBrack = 1 << 15, // LBrack
		Scope = 1 << 16, // Scope
		In = 1 << 17, // IN
		SCase = 1 << 18, // CASE, DEFAULT
		Else = 1 << 19, // ELSE
		Catch = 1 << 20, // CATCH, FINALLY
		Var = 1 << 21, //
		Stmt = 1 << 22, // BREAK, RETURN, THROW, DEBUGGER, FOR, SWITCH, DO, IF, TRY, WITH
		While = 1 << 23, // WHILE
		ID = 1 << 24, // ID
		Prefix = 1 << 25, // VOID, DELETE, TYPEOF, AWAIT
		Literal = 1 << 26, // IntCon, FltCon, StrCon
		RLit = 1 << 27, // THIS, TRUE, FALSE, NULL
		Func = 1 << 28, // FUNCTION
		EOF = 1 << 29, // EOF

		// REVIEW: Name this something clearer.
		TypeScriptS = 1 << 30, // PROPERTY, PRIVATE, STATIC, INTERFACE, CLASS, MODULE, EXPORT, IMPORT
		ExprStart = SColon |
			AddOp |
			LCurly |
			PreOp |
			RegExp |
			LParen |
			LBrack |
			ID |
			Prefix |
			RLit |
			Func |
			Literal,
		StmtStart = ExprStart | SColon | Var | Stmt | While | TypeScriptS,
		Postfix = Dot | LParen | LBrack,
	}

	export enum AllowedElements {
		None = 0,
		ModuleDeclarations = 1 << 2,
		ClassDeclarations = 1 << 3,
		InterfaceDeclarations = 1 << 4,
		AmbientDeclarations = 1 << 10,
		Properties = 1 << 11,

		Global = ModuleDeclarations |
			ClassDeclarations |
			InterfaceDeclarations |
			AmbientDeclarations,
		QuickParse = Global | Properties,
	}

	export enum Modifiers {
		None = 0,
		Private = 1,
		Public = 1 << 1,
		Readonly = 1 << 2,
		Ambient = 1 << 3,
		Exported = 1 << 4,
		Getter = 1 << 5,
		Setter = 1 << 6,
		Static = 1 << 7,
	}

	export enum ASTFlags {
		None = 0,
		ExplicitSemicolon = 1, // statment terminated by an explicit semicolon
		AutomaticSemicolon = 1 << 1, // statment terminated by an automatic semicolon
		Writeable = 1 << 2, // node is lhs that can be modified
		Error = 1 << 3, // node has an error
		DotLHSPartial = 1 << 4, // node is the lhs of an incomplete dot expr at cursor
		DotLHS = 1 << 5, // node is the lhs of a dot expr
		IsStatement = 1 << 6, // node is a statement
		StrictMode = 1 << 7, // node is in the strict mode environment
		PossibleOptionalParameter = 1 << 8,
		ClassBaseConstructorCall = 1 << 9,
		OptionalName = 1 << 10,
		// REVIEW: This flag is to mark lambda nodes to note that the LParen of an expression has already been matched in the lambda header.
		//         The flag is used to communicate this piece of information to the calling parseTerm, which intern will remove it.
		//         Once we have a better way to associate information with nodes, this flag should not be used.
		SkipNextRParen = 1 << 11,
	}

	export enum DeclFlags {
		None = 0,
		Exported = 1,
		Private = 1 << 1,
		Public = 1 << 2,
		Ambient = 1 << 3,
		Static = 1 << 4,
		LocalStatic = 1 << 5,
		GetAccessor = 1 << 6,
		SetAccessor = 1 << 7,
	}

	export enum ModuleFlags {
		None = 0,
		Exported = 1,
		Private = 1 << 1,
		Public = 1 << 2,
		Ambient = 1 << 3,
		Static = 1 << 4,
		LocalStatic = 1 << 5,
		GetAccessor = 1 << 6,
		SetAccessor = 1 << 7,
		IsEnum = 1 << 8,
		ShouldEmitModuleDecl = 1 << 9,
		IsWholeFile = 1 << 10,
		IsDynamic = 1 << 11,
		MustCaptureThis = 1 << 12,
	}

	export enum SymbolFlags {
		None = 0,
		Exported = 1,
		Private = 1 << 1,
		Public = 1 << 2,
		Ambient = 1 << 3,
		Static = 1 << 4,
		LocalStatic = 1 << 5,
		GetAccessor = 1 << 6,
		SetAccessor = 1 << 7,
		Property = 1 << 8,
		Readonly = 1 << 9,
		ModuleMember = 1 << 10,
		InterfaceMember = 1 << 11,
		ClassMember = 1 << 12,
		BuiltIn = 1 << 13,
		TypeSetDuringScopeAssignment = 1 << 14,
		Constant = 1 << 15,
		Optional = 1 << 16,
		RecursivelyReferenced = 1 << 17,
		Bound = 1 << 18,
		CompilerGenerated = 1 << 19,
	}

	export enum VarFlags {
		None = 0,
		Exported = 1,
		Private = 1 << 1,
		Public = 1 << 2,
		Ambient = 1 << 3,
		Static = 1 << 4,
		LocalStatic = 1 << 5,
		GetAccessor = 1 << 6,
		SetAccessor = 1 << 7,
		AutoInit = 1 << 8,
		Property = 1 << 9,
		Readonly = 1 << 10,
		Class = 1 << 11,
		ClassProperty = 1 << 12,
		ClassBodyProperty = 1 << 13,
		ClassConstructorProperty = 1 << 14,
		ClassSuperMustBeFirstCallInConstructor = 1 << 15,
		Constant = 1 << 16,
		MustCaptureThis = 1 << 17,
	}

	export enum FncFlags {
		None = 0,
		Exported = 1,
		Private = 1 << 1,
		Public = 1 << 2,
		Ambient = 1 << 3,
		Static = 1 << 4,
		LocalStatic = 1 << 5,
		GetAccessor = 1 << 6,
		SetAccessor = 1 << 7,
		Definition = 1 << 8,
		Signature = 1 << 9,
		Method = 1 << 10,
		HasReturnExpression = 1 << 11,
		CallMember = 1 << 12,
		ConstructMember = 1 << 13,
		HasSelfReference = 1 << 14,
		IsFatArrowFunction = 1 << 15,
		IndexerMember = 1 << 16,
		IsFunctionExpression = 1 << 17,
		ClassMethod = 1 << 18,
		ClassPropertyMethodExported = 1 << 19,
	}

	export enum SignatureFlags {
		None = 0,
		IsIndexer = 1,
		IsStringIndexer = 1 << 1,
		IsNumberIndexer = 1 << 2,
	}

	export function ToDeclFlags(fncFlags: FncFlags): DeclFlags;
	export function ToDeclFlags(varFlags: VarFlags): DeclFlags;
	export function ToDeclFlags(symFlags: SymbolFlags): DeclFlags;
	export function ToDeclFlags(moduleFlags: ModuleFlags): DeclFlags;
	export function ToDeclFlags(fncOrVarOrSymbolOrModuleFlags: any) {
		return <DeclFlags>fncOrVarOrSymbolOrModuleFlags;
	}

	export enum TypeFlags {
		None = 0,
		HasImplementation = 1,
		HasSelfReference = 1 << 1,
		MergeResult = 1 << 2,
		IsEnum = 1 << 3,
		BuildingName = 1 << 4,
		HasBaseType = 1 << 5,
		HasBaseTypeOfObject = 1 << 6,
		IsClass = 1 << 7,
	}

	export enum TypeRelationshipFlags {
		SuccessfulComparison = 0,
		SourceIsNullTargetIsVoidOrUndefined = 1,
		RequiredPropertyIsMissing = 1 << 1,
		IncompatibleSignatures = 1 << 2,
		SourceSignatureHasTooManyParameters = 3,
		IncompatibleReturnTypes = 1 << 4,
		IncompatiblePropertyTypes = 1 << 5,
		IncompatibleParameterTypes = 1 << 6,
	}

	export enum CodeGenTarget {
		ES3 = 0,
		ES5 = 1,
	}

	export enum ModuleGenTarget {
		Synchronous = 0,
		Asynchronous = 1,
		Local = 1 << 1,
	}

	// Compiler defaults to generating ES5-compliant code for
	//  - getters and setters
	export var codeGenTarget: CodeGenTarget = CodeGenTarget.ES3;

	export var moduleGenTarget: ModuleGenTarget = ModuleGenTarget.Synchronous;

	export var optimizeModuleCodeGen = true;

	export function flagsToString(e, flags: number): string {
		var builder = "";
		for (var i = 1; i < 1 << 31; i = i << 1) {
			if ((flags & i) != 0) {
				for (var k in e) {
					if (e[k] == i) {
						if (builder.length > 0) {
							builder += "|";
						}
						builder += k;
						break;
					}
				}
			}
		}
		return builder;
	}
}
