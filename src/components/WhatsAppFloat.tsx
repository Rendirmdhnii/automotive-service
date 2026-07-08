"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-40 group"
    >
      <a
        href="https://api.whatsapp.com/send/?phone=6282338325621"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.4)] transition-all duration-300 relative group"
        aria-label="Chat WhatsApp Admin IPIN MOTOR"
      >
        {/* Pulsing ring for towing emergency */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/20 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 2.002 14.12 1.01 11.516 1.01c-5.44 0-9.866 4.372-9.87 9.802 0 1.688.463 3.335 1.34 4.779l-.99 3.616 3.731-.968h-.08zM15.42 12.92c-.29-.145-1.72-.848-1.99-.947-.27-.099-.46-.148-.66.148-.2.297-.77.947-.94 1.146-.17.198-.35.223-.64.078-.29-.145-1.226-.451-2.335-1.436-.864-.767-1.448-1.716-1.618-2.013-.17-.297-.018-.458.13-.604.13-.13.29-.347.44-.52.15-.173.2-.297.3-.495.1-.198.05-.371-.025-.52-.075-.148-.66-1.587-.9-2.18-.24-.582-.49-.5-.66-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.074-.79.371-.27.297-1.04 1.016-1.04 2.479 0 1.462 1.07 2.875 1.22 3.073.15.198 2.106 3.2 5.1 4.495.71.309 1.268.495 1.7.632.72.228 1.37.195 1.89.118.57-.085 1.72-.702 1.96-1.382.24-.68.24-1.263.17-1.382-.07-.118-.27-.218-.56-.363z" />
        </svg>

        {/* Sliding Tooltip on Hover */}
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[200px] transition-all duration-300 font-poppins font-bold text-xs uppercase tracking-wide text-white">
          Tanya Servis / Towing 24J
        </span>
      </a>
    </motion.div>
  );
}
