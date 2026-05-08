"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface HubspotFormProps {
  portalId: string;
  formId: string;
  className?: string;
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string;
          portalId: string;
          formId: string;
          target: string;
          onFormSubmitted?: () => void;
        }) => void;
      };
    };
  }
}

export function HubspotForm({ portalId, formId, className = "" }: HubspotFormProps) {
  const containerId = `hs-form-${formId}`;
  const [scriptReady, setScriptReady] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    if (!scriptReady || mounted.current) return;
    mounted.current = true;

    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId,
        formId,
        target: `#${containerId}`,
        onFormSubmitted: () => setSubmitted(true),
      });
    }
  }, [scriptReady, portalId, formId, containerId]);

  return (
    <div className={className}>
      <Script
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="lazyOnload"
        onReady={() => setScriptReady(true)}
      />

      {submitted ? (
        <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-white"
            >
              <path
                d="M4 10l4 4 8-8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-white font-light text-lg">Message received.</p>
          <p className="text-zinc-500 text-sm">
            We&apos;ll be in touch within one business day.
          </p>
        </div>
      ) : (
        <div
          id={containerId}
          className="[&_.hs-form]:flex [&_.hs-form]:flex-col [&_.hs-form]:gap-4"
        />
      )}
    </div>
  );
}
