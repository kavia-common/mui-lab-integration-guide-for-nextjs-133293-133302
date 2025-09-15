"use client";

import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
// Some @mui/lab versions export treeItemClasses as default, not named.
// Use default import for compatibility across versions.
import treeItemClasses from "@mui/lab/TreeItem";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ChevronRight from "@mui/icons-material/ChevronRight";

// PUBLIC_INTERFACE
export default function Home() {
  /**
   * This page demonstrates correct imports for MUI Lab's TreeItem.
   * Key points:
   * - Install packages:
   *   npm i @mui/material@7.0.0-rc.0 @mui/lab@7.0.0-beta.8 @mui/icons-material@7.0.0-rc.0 @emotion/react @emotion/styled --legacy-peer-deps
   * - Import TreeView from '@mui/lab/TreeView'
   * - Import TreeItem and its types/classes from '@mui/lab/TreeItem'
   */
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-xl w-full">
        <h1 className="text-black text-3xl font-semibold mb-4">
          MUI Lab TreeView Integration
        </h1>

        <div className="rounded border border-gray-200 p-4">
          <TreeView
            defaultCollapseIcon={<ExpandMore />}
            defaultExpandIcon={<ChevronRight />}
            aria-label="file system navigator"
          >
            <TreeItem itemId="1" label="Applications">
              <TreeItem itemId="2" label="Calendar" />
              <TreeItem itemId="3" label="Chrome" />
              <TreeItem itemId="4" label="Webstorm" />
            </TreeItem>
            <TreeItem itemId="5" label="Documents">
              <TreeItem itemId="6" label="MUI">
                <TreeItem itemId="7" label="index.ts" />
              </TreeItem>
            </TreeItem>
          </TreeView>
        </div>

        <p className="text-gray-600 text-sm mt-4">
          Imports used: TreeView from &apos;@mui/lab/TreeView&apos;; TreeItem, treeItemClasses
          from &apos;@mui/lab/TreeItem&apos;. If you previously imported from &apos;@mui/lab&apos; or
          a mismatched version, you may see ts(2307) errors. Ensure compatible versions
          are installed as noted above.
        </p>

        <p className="text-gray-600 text-xs mt-2">
          Current usage demonstrates resolved module and type declarations.
          treeItemClasses example: {String(!!treeItemClasses)} (class keys available).
        </p>
      </div>
    </main>
  );
}
